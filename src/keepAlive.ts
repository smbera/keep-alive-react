import keepAliveCache from './keepAliveCache'

export interface KeepAliveAssist {
    keepAlive?: (state: any) => void
    getAlive?: () => any
    deleteAlive?: () => void
}

export function KeepAliveFactory(name) {
    return function (WrappedComponent) {
        return keepAliveHOC(WrappedComponent, name)
    }
}

export function keepAliveHOC(WrappedComponent, name): any {
    return class Enhancer extends WrappedComponent {
        constructor(props) {
            super(props)
            const { getAlive, keepAlive, deleteAlive } = keepAliveCache()

            this.keepAlive = (state: any) => keepAlive({ name, state })
            this.getAlive = () => getAlive(name)?.state || null
            this.deleteAlive = () => deleteAlive(name)
        }
    }
}

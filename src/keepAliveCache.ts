import keepAliveConfig from './keepAliveConfig'
export interface CacheItem {
    name: string
    state?: any
}

export interface UpdateCache {
    name: string
    state: any
}

const keepAliveCache = () => {
    const { cacheName, maxLength } = keepAliveConfig()

    const getCacheList = (): CacheItem[] => {
        const storeCache = window[cacheName]
        return storeCache.cacheList
    }

    const getAlive = (name: string) => {
        let cacheList = getCacheList()
        const item = cacheList.find((i: CacheItem) => i.name === name)
        return item || null
    }

    const keepAlive = ({ name, state }: UpdateCache) => {
        let cacheList = getCacheList()
        let index = cacheList.findIndex((i: CacheItem) => i.name === name)
        if (index !== -1) {
            cacheList.splice(index, 1, {
                name,
                state,
            })
        } else {
            cacheList.unshift({
                name,
                state,
            })
        }

        if (cacheList.length > maxLength) cacheList.pop()
    }

    const deleteAlive = (name: string) => {
        let cacheList = getCacheList()
        let index = cacheList.findIndex((i: CacheItem) => i.name === name)
        if (index !== -1) {
            cacheList.splice(index, 1)
        }
    }

    return {
        getAlive,
        keepAlive,
        deleteAlive,
    }
}

export default keepAliveCache

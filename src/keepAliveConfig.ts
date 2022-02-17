const CACHE_NAME = `__KEEP_ALIVE_CACHE_NAME__`
let DEFAULT_CONFIG = {
    maxLength: 10,
}

const keepAliveConfig = (config = DEFAULT_CONFIG) => {
    const { maxLength } = { ...DEFAULT_CONFIG, ...config }
    window[CACHE_NAME] = {
        maxLength,
        cacheList: window[CACHE_NAME]?.cacheList || [],
    }

    return {
        cacheName: CACHE_NAME,
        ...DEFAULT_CONFIG,
    }
}

export default keepAliveConfig

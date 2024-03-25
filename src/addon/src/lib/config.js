export const cacheConfig = {
    MONGODB_HOST: process.env.MONGODB_HOST || 'mongodb',
    MONGODB_PORT: process.env.MONGODB_PORT || '27017',
    MONGODB_DB: process.env.MONGODB_DB || 'knightcrawler',
    MONGODB_USER: process.env.MONGODB_USER || 'mongo',
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD || 'mongo',
    COLLECTION_NAME: process.env.MONGODB_ADDON_COLLECTION || 'knightcrawler_addon_collection',
    NO_CACHE: parseBool(process.env.NO_CACHE, false),
}

// Combine the environment variables into a connection string
// The combined string will look something like:
// 'mongodb://mongo:mongo@localhost:27017/knightcrawler?authSource=admin'
cacheConfig.MONGO_URI = 'mongodb://' + cacheConfig.MONGODB_USER + ':' + cacheConfig.MONGODB_PASSWORD + '@' + cacheConfig.MONGODB_HOST + ':' + cacheConfig.MONGODB_PORT + '/' + cacheConfig.MONGODB_DB + '?authSource=admin';

export const databaseConfig = {
    POSTGRES_HOST: process.env.POSTGRES_HOST || 'postgres',
    POSTGRES_PORT: process.env.POSTGRES_PORT || '5432',
    POSTGRES_DB: process.env.POSTGRES_DB || 'knightcrawler',
    POSTGRES_USER: process.env.POSTGRES_USER || 'postgres',
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'postgres',
}

// Combine the environment variables into a connection string
// The combined string will look something like:
// 'postgres://postgres:postgres@localhost:5432/knightcrawler'
databaseConfig.POSTGRES_URI = 'postgres://' + databaseConfig.POSTGRES_USER + ':' + databaseConfig.POSTGRES_PASSWORD + '@' + databaseConfig.POSTGRES_HOST + ':' + databaseConfig.POSTGRES_PORT + '/' + databaseConfig.POSTGRES_DB;


function parseBool(boolString, defaultValue) {
    const isString = typeof boolString === 'string' || boolString instanceof String;

    if (!isString) {
        return defaultValue;
    }

    return boolString.toLowerCase() === 'true' ? true : defaultValue;
}

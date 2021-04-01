import { SwaggerVersions } from '@qest/swagger-utils';
import { Level } from '@qest/logger-utils';
import * as packagejson from '../../../package.json';

export const RATE_LIMIT_ENABLED_DEFAULT = true;

const systemConfig = {
    appName: packagejson.name,
    version: packagejson.version,
    description: process.env.npm_package_description,
    appUnavailable: process.env.APP_UNAVAILABLE ? process.env.APP_UNAVAILABLE === 'true' : false,
    port: parseInt(process.env.PORT, 10) || 8000,
    nodeEnv: process.env.NODE_ENV ?? 'production',
    corsAllowOrigins: process.env.CORS_ALLOW_ORIGINS ?? '*',
    logger: {
        level: (process.env.LOGGER_DEFAULT_LEVEL ?? 'info') as Level,
    },
    swagger: {
        includePaths: ['src'],
        excludedDirsFromPaths: ['./src/config'],
        host: process.env.SWAGGER_HOST ?? 'qestapp.net',
        basePath: process.env.SWAGGER_PATH ?? '/api/v1',
        swaggerVersion: SwaggerVersions.THREE,
    },
};

export default systemConfig;

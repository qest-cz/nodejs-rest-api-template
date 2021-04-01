import { SwaggerGenerator } from '@qest/swagger-utils';
import { PinoLogger } from '@qest/logger-utils';
import config from '../../config';

export const logger = new PinoLogger(config.logger);

export const swaggerGenerator = new SwaggerGenerator({
    descriptorInfo: {
        version: config.version,
        title: config.appName,
        description: config.description,
    },
    ...config.swagger,
});

import { SwaggerGenerator } from '@qest/swagger-utils';
import cosmas from 'cosmas';
import config from '../../config';

export const logger = cosmas(config.logger);

export const swaggerGenerator = new SwaggerGenerator({
    descriptorInfo: {
        version: config.version,
        title: config.appName,
        description: config.description,
    },
    ...config.swagger,
});

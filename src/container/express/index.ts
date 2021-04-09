import { corsSetup, server } from '@qest/express-utils';
import { Router } from 'express';
import { swaggerUiMiddleware } from '@qest/swagger-utils';
import config from '../../config';
import { logger } from '../system';
import { getStatus } from '../controllers';
import modules from './../../modules';
import { CreateExpress } from './types';

export const router = Router()
    .get('/', getStatus)
    .use(`/status`, getStatus)
    .use(
        '/swagger',
        swaggerUiMiddleware({
            swaggerOptions: {
                url: '/api/v1/swagger',
            },
        }),
    )
    .use(`/api/v1`, modules);

export const createExpress = ({ originHeader }: CreateExpress) =>
    server({
        logger,
        router,
        preMiddleware: [corsSetup(originHeader)],
    });

export const express = createExpress({
    originHeader: config.corsAllowOrigins,
});

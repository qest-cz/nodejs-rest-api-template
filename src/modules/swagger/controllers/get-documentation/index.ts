import { Request, Response } from 'express';
import * as httpCodes from 'http-codes';

import { SwaggerGenerator } from '@qest/swagger-utils';

export const createGetDocumentationController = (swaggerGenerator: SwaggerGenerator) => (req: Request, res: Response) => {
    res.status(httpCodes.OK).json(swaggerGenerator.getAsObject());
};

import { Response, NextFunction } from 'express';
import * as httpCodes from 'http-codes';
import { ExampleRequest, ExampleResponseBody, ExampleResponseBodySchema } from '../../models';
import { validateModel } from '../../../../utils';
import { ExampleService } from '../../../../services';

export const createGetExampleController = (exampleService: ExampleService) => async (
    req: ExampleRequest,
    res: Response,
    next: NextFunction,
) => {
    try {
        const response = exampleService.getExample(req.query.id);

        res.status(httpCodes.OK).json(validateModel<ExampleResponseBody, ExampleResponseBody>(response, ExampleResponseBodySchema));
    } catch (e) {
        return next(e);
    }
};

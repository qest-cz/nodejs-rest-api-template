import { NextFunction, Response } from 'express';
import { validateModel } from '../../../../utils';
import { ExampleQuery, ExampleQuerySchema, ExampleRequest } from '../../models';

export const validateGetExample = async (req: ExampleRequest, res: Response, next: NextFunction) => {
    try {
        validateModel<ExampleQuery, ExampleQuery>(req.query, ExampleQuerySchema);

        next();
    } catch (e) {
        return next(e);
    }
};

import { Request, Response } from 'express';
import * as httpCodes from 'http-codes';
import { ServiceUnavailableError } from '@qest/error-utils';

export const createGetStatusController = (config: { appName: string; version: string }) => async (req: Request, res: Response) => {
    try {
        res.status(httpCodes.OK).json({
            service: `${config.appName}/${config.version}`,
        });
    } catch (e) {
        throw new ServiceUnavailableError();
    }
};

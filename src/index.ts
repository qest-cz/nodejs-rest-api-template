import config from './config';
import { express } from './container/express';
import { logger } from './container/system';

export const listen = () => {
    return express
        .listen(config.port, () => {
            logger.info('[Express] Listening at %s', config.port);
        })
        .on('error', (e) => {
            if (e) {
                logger.error(e);
            }
        });
};

listen();

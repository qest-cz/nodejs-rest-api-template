import * as request from 'supertest';

import config from '../../../../config';
import { express } from '../../../../container/express';

describe('GET /status', () => {
    let server;

    beforeAll(() => {
        server = request(express);
    });

    it('should return service string with app name and version', async (done) => {
        const res = await server.get('/status');
        expect(res.status).toEqual(200);
        expect(res.body.service).toEqual(`${config.appName}/${config.version}`);
        done();
    });
});

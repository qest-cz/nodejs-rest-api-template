import config from '../../../../config';
import { server } from '../../../test-hooks';

describe('GET /api/v1/swagger', () => {
    it('should return swagger doc as json', async () => {
        const res = await server().get('/api/v1/swagger');
        const body = res.body;
        expect(res.status).toEqual(200);
        expect(body).toHaveProperty('openapi', '3.0.0');
        expect(body).toHaveProperty('info');
        expect(body.info).toHaveProperty('title', config.appName);
        expect(body.info).toHaveProperty('version', config.version);
        expect(body.info).toHaveProperty('description', config.description);
        expect(body).toHaveProperty('paths');
        expect(typeof body).toBe('object');
        expect(body).not.toEqual({});
        expect(body).toHaveProperty('components');
        expect(typeof body).toBe('object');
        expect(body).not.toEqual({});
        expect(body.components.responses).not.toEqual({});
        expect(body.components).toHaveProperty('schemas');
        expect(typeof body.components.schemas).toBe('object');
        expect(body.components.schemas).not.toEqual({});
        expect(body).toHaveProperty('tags');
        expect(Array.isArray(body.tags)).toBe(true);
    });
});

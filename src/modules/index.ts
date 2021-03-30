import * as express from 'express';
import { getDocumentation, getExample } from '../container/controllers';
import { validateGetExample } from './example/middlewares/validate-get';

export default express.Router().use(`/swagger`, getDocumentation).use(`/example`, validateGetExample, getExample);

import * as request from 'supertest';
import { express } from '../container/express';

export const server = () => request(express);

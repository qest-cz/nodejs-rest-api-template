import * as t from 'io-ts';
import { Request } from 'express';

export const ExampleQuerySchema = t.type({
    id: t.string,
});

export const ExampleResponseBodySchema = t.type({
    foo: t.string,
    bar: t.string,
});

export type ExampleQuery = t.TypeOf<typeof ExampleQuerySchema>;
export type ExampleResponseBody = t.TypeOf<typeof ExampleResponseBodySchema>;

export interface ExampleRequest extends Request {
    query: ExampleQuery;
}

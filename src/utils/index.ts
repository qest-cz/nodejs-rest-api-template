import { TypeC, Errors } from 'io-ts';
import { fold } from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import { UnprocessableEntityError } from '@qest/error-utils';

export type Maybe<O> = unknown | O;

export const validateModel = <I, O>(raw: I, type: TypeC<any>, nameOfError?: string): O => {
    const onLeft = (errors: Errors): void => {
        throw new UnprocessableEntityError({
            type: nameOfError ?? 'Validation error',
            message: 'Validation failed',
            payload: errors,
        });
    };

    const t: Maybe<O> = pipe(
        type.decode(raw),
        fold(onLeft, (toReturn) => toReturn),
    );
    return <O>t;
};

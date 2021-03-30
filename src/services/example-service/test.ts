import { ExampleService } from '.';

describe('Example service', () => {
    const testBar = 'testBar';
    const exampleService = new ExampleService(testBar);

    it('should return example object with foo and bar attributes', async () => {
        const testId = 'hello';
        const example = exampleService.getExample(testId);
        expect(example).toMatchObject({
            foo: testId,
            bar: testBar,
        });
    });
});

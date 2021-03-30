export class ExampleService {
    constructor(private bar: string) {}

    getExample(name: string) {
        return {
            foo: name,
            bar: this.bar,
        };
    }
}

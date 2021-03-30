import config from '../../config';
import { ExampleService } from '../../services';

export const exampleService = new ExampleService(config.bar);

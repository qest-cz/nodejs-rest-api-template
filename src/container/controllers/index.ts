import config from '../../config';
import { createGetExampleController } from '../../modules/example';
import { createGetStatusController } from '../../modules/status';
import { createGetDocumentationController } from '../../modules/swagger';
import { exampleService } from '../app';
import { swaggerGenerator } from '../system';

export const getStatus = createGetStatusController(config);

export const getDocumentation = createGetDocumentationController(swaggerGenerator);

export const getExample = createGetExampleController(exampleService);

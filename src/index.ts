import { PROVIDERS } from './services';

export * from './decorators/has-many.decorator';
export * from './decorators/json-api-model-config.decorator';
export * from './decorators/json-api-datastore-config.decorator';

export * from './models/json-api.model';

export * from './services';

export default {
  providers: [PROVIDERS]
};

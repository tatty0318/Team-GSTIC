import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Sprint1',
  connector: 'mongodb',
  url: 'mongodb+srv://edwinpantoja:makia21031993@cluster0.ckww8.mongodb.net/grupo10?retryWrites=true&w=majority',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Sprint1DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Sprint1';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Sprint1', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

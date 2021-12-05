import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Sprint1DataSource} from '../datasources';
import {NotificacionesPersona, NotificacionesPersonaRelations} from '../models';

export class NotificacionesPersonaRepository extends DefaultCrudRepository<
  NotificacionesPersona,
  typeof NotificacionesPersona.prototype.id,
  NotificacionesPersonaRelations
> {
  constructor(
    @inject('datasources.Sprint1') dataSource: Sprint1DataSource,
  ) {
    super(NotificacionesPersona, dataSource);
  }
}

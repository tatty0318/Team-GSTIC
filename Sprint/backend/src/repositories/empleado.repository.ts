import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {Sprint1DataSource} from '../datasources';
import {Empleado, EmpleadoRelations, NotificacionesPersona, Persona} from '../models';
import {PersonaRepository} from './persona.repository';
import {NotificacionesPersonaRepository} from './notificaciones-persona.repository';

export class EmpleadoRepository extends DefaultCrudRepository<
  Empleado,
  typeof Empleado.prototype.id,
  EmpleadoRelations
> {

  public readonly notificacionesPersonas: HasManyThroughRepositoryFactory<NotificacionesPersona, typeof NotificacionesPersona.prototype.id,
          Persona,
          typeof Empleado.prototype.id
        >;

  constructor(
    @inject('datasources.Sprint1') dataSource: Sprint1DataSource, @repository.getter('PersonaRepository') protected personaRepositoryGetter: Getter<PersonaRepository>, @repository.getter('NotificacionesPersonaRepository') protected notificacionesPersonaRepositoryGetter: Getter<NotificacionesPersonaRepository>,
  ) {
    super(Empleado, dataSource);
    this.notificacionesPersonas = this.createHasManyThroughRepositoryFactoryFor('notificacionesPersonas', notificacionesPersonaRepositoryGetter, personaRepositoryGetter,);
    this.registerInclusionResolver('notificacionesPersonas', this.notificacionesPersonas.inclusionResolver);
  }
}

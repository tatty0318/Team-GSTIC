import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {Sprint1DataSource} from '../datasources';
import {Persona, PersonaRelations, Empleado} from '../models';
import {EmpleadoRepository} from './empleado.repository';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.id,
  PersonaRelations
> {

  public readonly empleado: HasOneRepositoryFactory<Empleado, typeof Persona.prototype.id>;

  constructor(
    @inject('datasources.Sprint1') dataSource: Sprint1DataSource, @repository.getter('EmpleadoRepository') protected empleadoRepositoryGetter: Getter<EmpleadoRepository>,
  ) {
    super(Persona, dataSource);
    this.empleado = this.createHasOneRepositoryFactoryFor('empleado', empleadoRepositoryGetter);
    this.registerInclusionResolver('empleado', this.empleado.inclusionResolver);
  }
}

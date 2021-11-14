import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Empresa} from './empresa.model';

@model()
export class Empleado extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  personaId: string;

  @property({
    type: 'string',
    required: true,
  })
  salario: string;

  @property({
    type: 'string',
    required: true,
  })
  esDirectivo: string;

  @property({
    type: 'string',
    required: true,
  })
  esCliente: string;

  @belongsTo(() => Empresa)
  empresaId: string;

  constructor(data?: Partial<Empleado>) {
    super(data);
  }
}

export interface EmpleadoRelations {
  // describe navigational properties here
}

export type EmpleadoWithRelations = Empleado & EmpleadoRelations;

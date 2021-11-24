import {Entity, model, property, hasMany} from '@loopback/repository';
import {NotificacionesPersona} from './notificaciones-persona.model';
import {Persona} from './persona.model';

@model()
export class Empleado extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'number',
    required: true,
  })
  salario: number;

  @property({
    type: 'boolean',
    required: true,
  })
  esDirectivo: number;

  @property({
    type: 'boolean',
    required: true,
  })
  esCliente: number;

  @property({
    type: 'string',
  })
  personaId?: string;

  @property({
    type: 'string',
  })
  empresaId?: string;

  @hasMany(() => NotificacionesPersona, {through: {model: () => Persona}})
  notificacionesPersonas: NotificacionesPersona[];

  constructor(data?: Partial<Empleado>) {
    super(data);
  }
}

export interface EmpleadoRelations {
  // describe navigational properties here
}

export type EmpleadoWithRelations = Empleado & EmpleadoRelations;

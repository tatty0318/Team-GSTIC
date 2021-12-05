import {Entity, model, property} from '@loopback/repository';

@model()
export class NotificacionesPersona extends Entity {
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
  mensaje: string;


  constructor(data?: Partial<NotificacionesPersona>) {
    super(data);
  }
}

export interface NotificacionesPersonaRelations {
  // describe navigational properties here
}

export type NotificacionesPersonaWithRelations = NotificacionesPersona & NotificacionesPersonaRelations;

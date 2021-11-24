import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
  import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
Empleado,
Persona,
NotificacionesPersona,
} from '../models';
import {EmpleadoRepository} from '../repositories';

export class EmpleadoNotificacionesPersonaController {
  constructor(
    @repository(EmpleadoRepository) protected empleadoRepository: EmpleadoRepository,
  ) { }

  @get('/empleados/{id}/notificaciones-personas', {
    responses: {
      '200': {
        description: 'Array of Empleado has many NotificacionesPersona through Persona',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(NotificacionesPersona)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<NotificacionesPersona>,
  ): Promise<NotificacionesPersona[]> {
    return this.empleadoRepository.notificacionesPersonas(id).find(filter);
  }

  @post('/empleados/{id}/notificaciones-personas', {
    responses: {
      '200': {
        description: 'create a NotificacionesPersona model instance',
        content: {'application/json': {schema: getModelSchemaRef(NotificacionesPersona)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Empleado.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NotificacionesPersona, {
            title: 'NewNotificacionesPersonaInEmpleado',
            exclude: ['id'],
          }),
        },
      },
    }) notificacionesPersona: Omit<NotificacionesPersona, 'id'>,
  ): Promise<NotificacionesPersona> {
    return this.empleadoRepository.notificacionesPersonas(id).create(notificacionesPersona);
  }

  @patch('/empleados/{id}/notificaciones-personas', {
    responses: {
      '200': {
        description: 'Empleado.NotificacionesPersona PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NotificacionesPersona, {partial: true}),
        },
      },
    })
    notificacionesPersona: Partial<NotificacionesPersona>,
    @param.query.object('where', getWhereSchemaFor(NotificacionesPersona)) where?: Where<NotificacionesPersona>,
  ): Promise<Count> {
    return this.empleadoRepository.notificacionesPersonas(id).patch(notificacionesPersona, where);
  }

  @del('/empleados/{id}/notificaciones-personas', {
    responses: {
      '200': {
        description: 'Empleado.NotificacionesPersona DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(NotificacionesPersona)) where?: Where<NotificacionesPersona>,
  ): Promise<Count> {
    return this.empleadoRepository.notificacionesPersonas(id).delete(where);
  }
}

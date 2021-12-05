import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {NotificacionesPersona} from '../models';
import {NotificacionesPersonaRepository} from '../repositories';

export class NotificacionesPersonaController {
  constructor(
    @repository(NotificacionesPersonaRepository)
    public notificacionesPersonaRepository : NotificacionesPersonaRepository,
  ) {}

  @post('/notificaciones-personas')
  @response(200, {
    description: 'NotificacionesPersona model instance',
    content: {'application/json': {schema: getModelSchemaRef(NotificacionesPersona)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NotificacionesPersona, {
            title: 'NewNotificacionesPersona',
            exclude: ['id'],
          }),
        },
      },
    })
    notificacionesPersona: Omit<NotificacionesPersona, 'id'>,
  ): Promise<NotificacionesPersona> {
    return this.notificacionesPersonaRepository.create(notificacionesPersona);
  }

  @get('/notificaciones-personas/count')
  @response(200, {
    description: 'NotificacionesPersona model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(NotificacionesPersona) where?: Where<NotificacionesPersona>,
  ): Promise<Count> {
    return this.notificacionesPersonaRepository.count(where);
  }

  @get('/notificaciones-personas')
  @response(200, {
    description: 'Array of NotificacionesPersona model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(NotificacionesPersona, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(NotificacionesPersona) filter?: Filter<NotificacionesPersona>,
  ): Promise<NotificacionesPersona[]> {
    return this.notificacionesPersonaRepository.find(filter);
  }

  @patch('/notificaciones-personas')
  @response(200, {
    description: 'NotificacionesPersona PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NotificacionesPersona, {partial: true}),
        },
      },
    })
    notificacionesPersona: NotificacionesPersona,
    @param.where(NotificacionesPersona) where?: Where<NotificacionesPersona>,
  ): Promise<Count> {
    return this.notificacionesPersonaRepository.updateAll(notificacionesPersona, where);
  }

  @get('/notificaciones-personas/{id}')
  @response(200, {
    description: 'NotificacionesPersona model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(NotificacionesPersona, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(NotificacionesPersona, {exclude: 'where'}) filter?: FilterExcludingWhere<NotificacionesPersona>
  ): Promise<NotificacionesPersona> {
    return this.notificacionesPersonaRepository.findById(id, filter);
  }

  @patch('/notificaciones-personas/{id}')
  @response(204, {
    description: 'NotificacionesPersona PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NotificacionesPersona, {partial: true}),
        },
      },
    })
    notificacionesPersona: NotificacionesPersona,
  ): Promise<void> {
    await this.notificacionesPersonaRepository.updateById(id, notificacionesPersona);
  }

  @put('/notificaciones-personas/{id}')
  @response(204, {
    description: 'NotificacionesPersona PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() notificacionesPersona: NotificacionesPersona,
  ): Promise<void> {
    await this.notificacionesPersonaRepository.replaceById(id, notificacionesPersona);
  }

  @del('/notificaciones-personas/{id}')
  @response(204, {
    description: 'NotificacionesPersona DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.notificacionesPersonaRepository.deleteById(id);
  }
}

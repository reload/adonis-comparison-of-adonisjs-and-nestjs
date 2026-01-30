import type { HttpContext } from '@adonisjs/core/http'
import { ApiOperation, ApiParam, ApiResponse } from '@foadonis/openapi/decorators'
import Agency, { AgencySchemaRules, AgencyValidatorMessages } from '#models/dto/agency'
import vine, { SimpleMessagesProvider } from '@vinejs/vine'
import { AgencyRepository } from '../repositories/agency.js'

export default class AgenciesController {
  @ApiOperation({ summary: 'List all agencies' })
  @ApiResponse({ type: [Agency], description: 'An array of all agencies' })
  async index() {
    const agencyRepository = new AgencyRepository()
    return await agencyRepository.getAll()
  }

  @ApiOperation({ summary: 'Show one agency' })
  @ApiParam({
    name: 'id',
    description: 'Agency id',
    required: true,
    type: 'string',
    example: '710100',
  })
  @ApiResponse({ type: Agency, description: 'Agency details' })
  async show({ request, params: { id } }: HttpContext) {
    const validator = vine.compile(
      vine.object({
        params: vine.object({
          id: AgencySchemaRules.id,
        }),
      })
    )
    await request.validateUsing(validator, {
      messagesProvider: new SimpleMessagesProvider({
        'params.id.regex': AgencyValidatorMessages.id,
      }),
    })

    const agencyRepository = new AgencyRepository()
    return await agencyRepository.getOne(id)
  }
}

import { AgencySchemaRules, AgencyValidatorMessages } from '#models/dto/agency'
import Branch, { BranchSchemaRules, BranchValidatorMessages } from '#models/dto/branch'
import type { HttpContext } from '@adonisjs/core/http'
import { ApiOperation, ApiParam, ApiResponse } from '@foadonis/openapi/decorators'
import vine, { SimpleMessagesProvider } from '@vinejs/vine'
import { BranchRepository } from '../repositories/branch.js'

export default class BranchesController {
  @ApiOperation({ summary: 'List branches by agency' })
  @ApiParam({
    name: 'agency_id',
    description: 'Agency id',
    required: true,
    type: 'string',
    example: '710100',
  })
  @ApiResponse({ type: [Branch], description: 'An array of all branches tied to given agency' })
  async index({ request, params: { agency_id } }: HttpContext) {
    const validator = vine.compile(
      vine.object({
        params: vine.object({
          agency_id: AgencySchemaRules.id,
        }),
      })
    )
    await request.validateUsing(validator, {
      messagesProvider: new SimpleMessagesProvider({
        'params.agency_id.regex': AgencyValidatorMessages.id,
      }),
    })

    const branchRepository = new BranchRepository()
    return await branchRepository.getBranchesByAgencyId(agency_id)
  }

  @ApiOperation({ summary: 'Show one branch', description: 'Show one branch by id' })
  @ApiParam({
    name: 'id',
    description: 'Branch id',
    required: true,
    type: 'string',
    example: '710100',
  })
  @ApiResponse({ type: Branch })
  async show({ request, params: { id } }: HttpContext) {
    const validator = vine.compile(
      vine.object({
        params: vine.object({
          id: BranchSchemaRules.id,
        }),
      })
    )
    await request.validateUsing(validator, {
      messagesProvider: new SimpleMessagesProvider({
        'params.id.regex': BranchValidatorMessages.id,
      }),
    })

    await request.validateUsing(validator)

    const branchRepository = new BranchRepository()
    return await branchRepository.getBranch(id)
  }
}

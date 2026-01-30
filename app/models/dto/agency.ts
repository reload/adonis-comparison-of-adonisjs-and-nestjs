import { ApiProperty } from '@foadonis/openapi/decorators'
import type { AgencyFbs } from '../../types/data/fbs/agency.js'
import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export default class Agency {
  @ApiProperty()
  declare id: string

  @ApiProperty()
  declare name: string

  static fromRequest({ id, navn }: AgencyFbs): Agency {
    const agency = new Agency()
    agency.id = id
    agency.name = navn
    return agency
  }
}

export const AgencyValidators = {
  id: vine.string().regex(/^\d+$/),
  name: vine.string(),
}

export const AgencyValidatorMessages = {
  id: 'Invalid id format. Format should be a number',
}

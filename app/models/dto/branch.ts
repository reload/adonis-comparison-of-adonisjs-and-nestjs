import { ApiProperty } from '@foadonis/openapi/decorators'
import type { BranchFbs } from '../../types/data/fbs/branch.js'
import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'

export default class Branch {
  // Format: [LANGCODE]-[NUMBER]. Eg.: DK-35534.
  @ApiProperty()
  declare id: string

  @ApiProperty()
  declare name: string

  @ApiProperty()
  declare organisation: string

  @ApiProperty()
  declare address: string

  @ApiProperty()
  declare postalCode: string

  @ApiProperty()
  declare city: string

  static fromRequest({ id, navn, organisation, adresse, postnr, by }: BranchFbs): Branch {
    const branch = new Branch()
    branch.id = id
    branch.name = navn
    branch.organisation = organisation
    branch.address = adresse
    branch.postalCode = postnr
    branch.city = by
    return branch
  }
}

export const BranchSchemaRules = {
  id: vine.string().regex(/^\d+$/),
  name: vine.string(),
  organisation: vine.string(),
  address: vine.string(),
  postalCode: vine.string().regex(/^\d+$/),
  city: vine.string(),
}

export const BranchValidatorMessages = {
  id: 'Invalid id format. Format should be a number',
}

export const BranchSchema = vine.object(BranchSchemaRules)
export type BranchBff = Infer<typeof BranchSchema>

import { BranchFbs } from '../../types/data/fbs/branch.js'

export default class Branch {
  constructor(
    // Format: [LANGCODE]-[NUMBER]. Eg.: DK-35534.
    public id: string,
    public name: string,
    public organisation: string,
    public address: string,
    public postalCode: string,
    public city: string
  ) {}

  static fromRequest({ id, navn, organisation, adresse, postnr, by }: BranchFbs): Branch {
    return new Branch(id, navn, organisation, adresse, postnr, by)
  }
}

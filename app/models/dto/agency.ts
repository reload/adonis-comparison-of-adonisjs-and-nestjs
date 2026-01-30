import type { AgencyFbs } from '../../types/data/fbs/agency.js'

export default class Agency {
  constructor(
    public id: string,
    public name: string
  ) {}

  static fromRequest({ id, navn }: AgencyFbs): Agency {
    return new Agency(id, navn)
  }
}

import type { FbsAgency } from '../../types/fbs.js'

export default class Agency {
  constructor(
    public id: string,
    public name: string
  ) {}

  static fromRequest({ id, navn }: FbsAgency): Agency {
    return new Agency(id, navn)
  }
}

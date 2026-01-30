import Agency, { AgencyBff } from '#models/dto/agency'
import { agencies } from '../mocks/agencies.js'

export interface AgencyRepositoryInterface {
  getAll(): Promise<Agency[]>
  getOne(id: AgencyBff['id']): Promise<Agency>
}

export class AgencyRepository implements AgencyRepositoryInterface {
  async getAll(): Promise<Agency[]> {
    return Promise.resolve(agencies.map((agency) => Agency.fromRequest(agency)))
  }

  async getOne(id: string): Promise<Agency> {
    const result = agencies.find((agency) => agency.id === id)
    if (!result) throw new Error(`Agency with id ${id} not found`)
    return Promise.resolve(Agency.fromRequest(result))
  }
}

import Branch from '#models/dto/branch'
import { cphBranches } from '../mocks/cph_branches.js'
import type { AgencyBff } from '../types/data/bff/agency.js'
import type { BranchBff } from '../types/data/bff/branch.js'

export interface BranchRepositoryInterface {
  getBranchesByAgencyId(id: AgencyBff['id']): Promise<BranchBff[]>
}

export class BranchRepository implements BranchRepositoryInterface {
  async getBranchesByAgencyId(id: AgencyBff['id']): Promise<BranchBff[]> {
    return Promise.resolve(cphBranches.map((branch) => Branch.fromRequest(branch)))
  }
}

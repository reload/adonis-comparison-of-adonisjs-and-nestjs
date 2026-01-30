import Branch from '#models/dto/branch'
import { cphBranches } from '../mocks/cph_branches.js'
import type { AgencyFFE } from '../types/agency_ffe.js'
import type { BranchFFE } from '../types/branch_ffe.js'

export interface BranchRepositoryInterface {
  getBranchesByAgencyId(id: AgencyFFE['id']): Promise<BranchFFE[]>
}

export class BranchRepository implements BranchRepositoryInterface {
  async getBranchesByAgencyId(id: AgencyFFE['id']): Promise<BranchFFE[]> {
    return Promise.resolve(cphBranches.map((branch) => Branch.fromRequest(branch)))
  }
}

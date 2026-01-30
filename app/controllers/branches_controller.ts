import type { HttpContext } from '@adonisjs/core/http'
import { BranchRepository } from '../repositories/branch_repository.js'

export default class BranchesController {
  /**
   * Display a list of resource
   */
  async index({ params: { agency_id } }: HttpContext) {
    if (!agency_id) {
      throw new Error('Agency ID is required')
    }
    const branchRepository = new BranchRepository()
    return await branchRepository.getBranchesByAgencyId(agency_id)
  }

  async show({ params: { id } }: HttpContext) {
    const branchRepository = new BranchRepository()
    return await branchRepository.getBranch(id)
  }
}

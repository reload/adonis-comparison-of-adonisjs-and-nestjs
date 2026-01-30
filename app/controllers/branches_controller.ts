import type { HttpContext } from '@adonisjs/core/http'
import { BranchRepository } from '../repositories/branch_repository.js'

export default class BranchesController {
  /**
   * Display a list of resource
   */
  async index({ params: { id } }: HttpContext) {
    const branchRepository = new BranchRepository()
    return await branchRepository.getBranchesByAgencyId(id)
  }
}

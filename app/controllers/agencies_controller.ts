import type { HttpContext } from '@adonisjs/core/http'
import { AgencyRepository } from '../repositories/agency_repository.js'

export default class AgenciesController {
  /**
   * Display a list of resource
   */
  async index() {
    const agencyRepository = new AgencyRepository()
    return await agencyRepository.getAll()
  }

  /**
   * Show individual record
   */
  async show({ params: { id } }: HttpContext) {
    const agencyRepository = new AgencyRepository()
    return await agencyRepository.getOne(id)
  }
}

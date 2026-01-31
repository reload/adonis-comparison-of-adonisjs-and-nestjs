/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import openapi from '@foadonis/openapi/services/main'
import { middleware } from './kernel.js'

const AgenciesController = () => import('#controllers/agencies')
const BranchesController = () => import('#controllers/branches')

router
  .group(() => {
    router.resource('branches', BranchesController).only(['show'])
    router.resource('agencies', AgenciesController).only(['index', 'show'])
    router.resource('agencies.branches', BranchesController).only(['index', 'show'])
  })
  .use(middleware.auth())

openapi.registerRoutes()

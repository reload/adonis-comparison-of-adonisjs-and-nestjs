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

const AgenciesController = () => import('#controllers/agencies')
router.resource('agencies', AgenciesController).only(['index', 'show'])

const BranchesController = () => import('#controllers/branches')
router.resource('branches', BranchesController).only(['show'])
router.resource('agencies.branches', BranchesController).only(['index', 'show'])

openapi.registerRoutes()

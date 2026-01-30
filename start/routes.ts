/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const AgenciesController = () => import('#controllers/agencies_controller')
router.resource('agencies', AgenciesController).only(['index', 'show'])

const BranchesController = () => import('#controllers/branches_controller')
router.resource('branches', BranchesController).only(['show'])
router.resource('agencies.branches', BranchesController).only(['index', 'show'])

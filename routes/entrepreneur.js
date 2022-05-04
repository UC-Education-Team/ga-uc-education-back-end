import { Router } from 'express'
import * as entrepreneurCtrl from '../controllers/entrepreneur.js'
import { checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
/*---------- Protected Routes ----------*/
router.get('/', checkAuth, entrepreneurCtrl.index)
router.get('/:id', checkAuth, entrepreneurCtrl.show)
router.post('/', entrepreneurCtrl.create)
router.put('/:id', checkAuth, entrepreneurCtrl.update)
router.delete('/:id', checkAuth, entrepreneurCtrl.delete)

export { router }
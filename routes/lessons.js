import { Router } from 'express'
import * as lessonsCtrl from '../controllers/lessons.js'
import { checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', lessonsCtrl.index)
router.get('/:id', lessonsCtrl.show)
/*---------- Protected Routes ----------*/
router.post('/', lessonsCtrl.create)
router.put('/:id', checkAuth, lessonsCtrl.update)
router.delete('/:id', checkAuth, lessonsCtrl.delete)

export { router }
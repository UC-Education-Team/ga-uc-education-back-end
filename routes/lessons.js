import { Router } from 'express'
import * as lessonsCtrl from '../controllers/lessons.js'
import { checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', lessonsCtrl.index)
router.get('/lessons/:id', lessonsCtrl.show)
/*---------- Protected Routes ----------*/
router.post('/lessons', checkAuth, lessonsCtrl.create)
router.put('/lessons/:id', checkAuth, lessonsCtrl.update)
router.delete('/lessons/:id', checkAuth, lessonsCtrl.delete)

export { router }
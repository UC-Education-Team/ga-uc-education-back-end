import { Router } from 'express'
import * as quizCtrl from '../controllers/quizzes.js'
import { checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
/*---------- Protected Routes ----------*/
router.get('/', checkAuth, quizCtrl.index)
router.get('/:id', checkAuth, quizCtrl.show)
router.post('/', quizCtrl.create)
router.put('/:id', checkAuth, quizCtrl.update)
router.delete('/:id', checkAuth, quizCtrl.delete)

export { router }
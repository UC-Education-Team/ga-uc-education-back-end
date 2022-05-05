import { Router } from 'express'
import * as quizCtrl from '../controllers/quizzes.js'
import { checkAuth } from '../middleware/auth.js'

const router = Router ()

/*---------- Public Routes ----------*/
/*---------- Protected Routes ----------*/
router.get('/', checkAuth, quizCtrl.index)
router.get('/quiz/:id', checkAuth, quizCtrl.show)
router.post('/quiz', checkAuth, quizCtrl.create)
router.put('/quiz/:id', checkAuth, quizCtrl.update)
router.delete('/quiz/:id', checkAuth, quizCtrl.delete)

export { router }
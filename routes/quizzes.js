import { Router } from 'express'
import * as quizCtrl from '../controllers/quizzes.js'

const router = Router ()

/*---------- Public Routes ----------*/
router.get('/', quizCtrl.index)
router.get('/quiz/:id', quizCtrl.show)
/*---------- Protected Routes ----------*/
router.post('/quiz', quizCtrl.create)
router.put('/quiz/:id', quizCtrl.update)
router.delete('/quiz/:id', quizCtrl.delete)
import { Router } from 'express'
import * as quizCtrl from '../controllers/quizzes.js'

const router = Router ()

/*---------- Public Routes ----------*/
router.get('/', lessonsCtrl.index)
router.get('/lessons/:id', lessonsCtrl.show)
/*---------- Protected Routes ----------*/
router.post('/lessons', lessonsCtrl.create)
router.put('/lessons/:id', lessonsCtrl.update)
router.delete('/lessons/:id', lessonsCtrl.delete)
import { Router } from 'express'
import * as lessonsCtrl from '../controllers/lessons.js'

const router = Router ()

/*---------- Public Routes ----------*/
router.get('/', lessonsCtrl.index)
router.get('/lessons/:id', lessonsCtrl.show)
/*---------- Protected Routes ----------*/
router.post('/lessons', lessonsCtrl.create)
router.put('/lessons/:id', lessonsCtrl.update)
router.delete('/lessons/:id', lessonsCtrl.delete)
import { Router } from 'express'
import * as moduleCtrl from '../controllers/modules.js'

const router = Router ()

/*---------- Public Routes ----------*/
router.get('/', moduleCtrl.index)
router.get('/modules/:id', moduleCtrl.show)
/*---------- Protected Routes ----------*/
router.post('/modules', moduleCtrl.create)
router.put('/modules/:id', moduleCtrl.update)
router.delete('/modules/:id', moduleCtrl.delete)
import { Router } from 'express'
import * as entrepreneurCtrl from '../controllers/entrepreneur.js'
import { checkAuth } from '../middleware/auth.js'

const router = Router ()

/*---------- Public Routes ----------*/
/*---------- Protected Routes ----------*/
router.get('/', checkAuth, entrepreneurCtrl.index)
router.get('/entrepreneur/:id', checkAuth, entrepreneurCtrl.show)
router.post('/entrepreneur', checkAuth, entrepreneurCtrl.create)
router.put('/entrepreneur/:id', checkAuth, entrepreneurCtrl.update)
router.delete('/entrepreneur/:id', checkAuth, entrepreneurCtrl.delete)
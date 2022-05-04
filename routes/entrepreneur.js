import { Router } from 'express'
import * as entrepreneurCtrl from '../controllers/entrepreneur.js'

const router = Router ()

/*---------- Public Routes ----------*/
router.get('/', entrepreneurCtrl.index)
router.get('/entrepreneur/:id', entrepreneurCtrl.show)
/*---------- Protected Routes ----------*/
router.post('/entrepreneur', entrepreneurCtrl.create)
router.put('/entrepreneur/:id', entrepreneurCtrl.update)
router.delete('/entrepreneur/:id', entrepreneurCtrl.delete)
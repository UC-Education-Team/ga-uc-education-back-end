import { Router } from "express";
import * as moduleCtrl from "../controllers/modules.js";
import { checkAuth } from "../middleware/auth.js";

const router = Router();

/*---------- Public Routes ----------*/
router.get('/', moduleCtrl.moduleCall)
router.get('/:id', moduleCtrl.show)
/*---------- Protected Routes ----------*/
router.post('/', moduleCtrl.create)
router.put('/:id', checkAuth, moduleCtrl.update)
router.delete('/:id', checkAuth, moduleCtrl.delete)

export { router }

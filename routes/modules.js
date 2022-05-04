import { Router } from "express";
import * as moduleCtrl from "../controllers/modules.js";
import { checkAuth } from "../middleware/auth.js";

const router = Router();

/*---------- Public Routes ----------*/
// router.get('/', moduleCtrl.index)
router.get("/modules/:id", moduleCtrl.show);
/*---------- Protected Routes ----------*/
router.post("/modules", checkAuth, moduleCtrl.create);
router.put("/modules/:id", checkAuth, moduleCtrl.update);
router.delete("/modules/:id", checkAuth, moduleCtrl.delete);
router.get("/", moduleCtrl.moduleCall);

export { router };

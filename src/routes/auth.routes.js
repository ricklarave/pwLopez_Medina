import { Router } from "express";
const router = Router()

import * as authCtrl from '../controllers/auth.controller'
import {verifySignup} from '../middlewares'

router.post('/singup', [verifySignup.checkDuplicateUsernmaeOrEmail, verifySignup.checkRolesExisted] authCtrl.singUp)
router.post('/singin', authCtrl.singin)

export default router;
import { Router } from 'express'
const router = Router()

import { serverCheck } from '../controllers/index.controller'

router.route('/').get(serverCheck)

export default router;
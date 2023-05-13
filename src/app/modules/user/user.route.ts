import exppress from 'express'
import { createUser } from './user.controller'
const router = exppress.Router()

router.get('/', createUser)

export default router
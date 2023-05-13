import exppress from 'express'
import { createUser, getUsers } from './user.controller'
const router = exppress.Router()

router.get('/', getUsers)
router.post('/create-user', createUser)

export default router
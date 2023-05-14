import exppress from 'express'
import { createUser, getUserById, getUsers } from './user.controller'
const router = exppress.Router()

router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/create-user', createUser)

export default router
import { Router } from "express"
import { ensureAuthenticated } from "./middleware/ensureAuthenticated"
import { CreateClassController } from "./useCases/classesUseCases/createClass/CreateClassController"
import { DeleteClassController } from "./useCases/classesUseCases/deleteClass/DeleteClassController"
import { ListenClassController } from "./useCases/classesUseCases/listenClass/ListenClassController"
import { UpdateClassController } from "./useCases/classesUseCases/updateClass/UpdateClassController"
import { AuthenticateUserController } from "./useCases/usersUseCases/authenticateUser/AuthenticateUserController"
import { CreateUserController } from "./useCases/usersUseCases/createUser/CreateUserController"
import { DeleteUserController } from "./useCases/usersUseCases/deleteUser/DeleteUserController"
import { ListenUserController } from "./useCases/usersUseCases/listenUser/ListenUserController"
import { UpdateUserController } from "./useCases/usersUseCases/updateUser/UpdateUserController"

const router = Router()

const createUserController = new CreateUserController()
const listenUserController = new ListenUserController()
const authenticateUserController = new AuthenticateUserController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()

const createClassController = new CreateClassController()
const listenClassController = new ListenClassController()
const updateClassController = new UpdateClassController()
const deleteClassController = new DeleteClassController()

router.get('/users', ensureAuthenticated, listenUserController.handle)
router.post('/users', createUserController.handle)
router.put('/users', ensureAuthenticated, updateUserController.handle)
router.delete('/users', ensureAuthenticated, deleteUserController.handle)
router.post('/users/login', authenticateUserController.handle)

router.get('/classes', listenClassController.handle)
router.post('/classes', ensureAuthenticated, createClassController.handle)
router.put('/classes', ensureAuthenticated,updateClassController.handle)
router.delete('/classes', ensureAuthenticated, deleteClassController.handle)

export { router }

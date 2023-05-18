import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import userController from './user/user.controller'


const routes = Router()

routes.get('/health-check', healthCheckController.check)
routes.post('/users', userController.create)
routes.get('/users', userController.list)
routes.get('/users/:id', userController.find)
routes.get('/users-name', userController.findByName)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)



export default routes
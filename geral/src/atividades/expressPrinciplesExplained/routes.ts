// 16 - importamos a Classe Router do express
import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import productController from './controller/productController'
import userController from './controller/userController'

// 17 - criamos uma constante que recebe o objeto Router
const routes = Router()

// 18 - executamos o método get de Router() , e passamos como parametro, o nome da rota que queremos criar
// e o método que deve ser executado quando esta rota for chamada
routes.get('/health-check', healthCheckController.check)
routes.get('/users', userController.findAll)
routes.get('/users/:id', userController.find)
routes.post('/users', userController.create)
routes.delete('/users/:id', userController.delete)
routes.put('/users/:id', userController.update)
routes.post('/products', productController.create)
routes.get('/products', productController.list)
routes.get('/products-stock', productController.getStock)
routes.get('/products-stock-value', productController.getStockValue)

// 19 - exportar a constante routes
export default routes
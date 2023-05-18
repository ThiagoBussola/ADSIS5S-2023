import { Router } from 'express'
import bookController from './src/book/book.controller'

const routes = Router()


routes.get('/health-check')
routes.post('/books', bookController.create)
routes.get('/books', bookController.find)

export {
   routes
}
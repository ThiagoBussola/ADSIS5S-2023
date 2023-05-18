// vou configurar o express e a conexão com o banco
import express from 'express'
import mongoose from 'mongoose'
import { routes } from './routes'

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middleware()
        this.routes()
        this.database()
    }

    private middleware(): void {
        this.express.use(express.json())
    }

    private routes(): void {
        this.express.use(routes)
    }

    private async database() {
        try {
            mongoose.set("strictQuery", true)
            await mongoose.connect('mongodb://0.0.0.0:27017/ads-books')
            console.log('Connect database success')

        } catch(err) {
            console.error('Connect database fail, error', err)
        }
    }
}

export default new App().express

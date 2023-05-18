import express from 'express'

import routes from './routes'

import mongoose from 'mongoose'

class App {

    public express: express.Application

    public constructor() {
        this.express = express()
        this.middleware()
        this.routes()
        this.database()
    }

    public middleware(): void {
        this.express.use(express.json())
    }

    public async database() {
        try {
            mongoose.set("strictQuery", true)
            await mongoose.connect('mongodb://0.0.0.0:27017/esoft7s')
            console.log('Connect database success')
        } catch (err) {
            console.error('Connect database fail, error', err)
        }
    }
    public routes(): void {
        this.express.use(routes)
    }
}
export default new App().express
import express from 'express'
import cors from 'cors'
import routes from './routes/routes'

class App {
    public express: express.Application

    public constructor () {
        this.express = express()
        this.middleware()
    }

    private middleware (): void {
        this.express.use(express.json())
        this.express.use(cors())
        this.express.use(routes)
    }
}

export default new App()
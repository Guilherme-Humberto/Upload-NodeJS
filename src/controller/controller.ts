import { Request, Response } from 'express'

class Controller {
    public async create (req: Request, res: Response) {
        console.log(req.file)
    }
}


export default new Controller()

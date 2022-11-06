import { Request, Response } from 'express'
import connection from '../db/connection'

export const addUsuario = (req: Request, res: Response) => {
    res.json({
        msg: "Add usuario"
    })
}

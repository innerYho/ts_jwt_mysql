import { Request, Response } from 'express';
import connection from '../db/connection';

export const getPro = (req: Request, res: Response) => {
  connection.query('SELECT * FROM productos', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ data });
    }
  });
};

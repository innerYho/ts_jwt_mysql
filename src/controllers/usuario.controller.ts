import { Request, Response } from 'express';
import connection from '../db/connection';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const addUsuario = async (req: Request, res: Response) => {
  // console.log(req.body);
  const { nombre, password } = req.body; // method 1 & 3
  // const { body } = req; // method 2

  // const hashedPassword = await bcrypt.hashSync(myPlaintextPassword, salt);
  const hashedPassword = await bcrypt.hash(password, 10);
  connection.query(
    'INSERT INTO usuarios set ?',
    {
      nombre: nombre,
      // nombre, // si es el mismo dato que recibe en la bds
      password: hashedPassword,
    },
    // body method 2
    // {nombre,password}, // method 3

    (err, data) => {
      if (err) {
        console.log(err);
      }
      res.json({
        msg: 'Add usuario',
      });
    }
  );

  // res.json({ msg: 'Add User' });
};
// http://localhost:3001/api/usuarios
// {"nombre": "Juan",
// "password": "admin123"}

export const loginUser = (req: Request, res: Response) => {
  const { nombre, password } = req.body;
  //Escaping query
  connection.query(
    'SELECT * FROM usuarios WHERE nombre = ' + connection.escape(nombre),
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        if (data.length == 0) {
          //No exist user
          res.json({
            msg: 'No existe usuario en la base de datos',
          });
        } else {
          const userPassword = data[0].password;
          // console.log(userPassword);

          // Compare password
          bcrypt.compare(password, userPassword).then((result) => {
            console.log(result);
            if (result) {
              //okLogin create token
              const token = jwt.sign(
                { nombre: nombre },
                process.env.SECRET_KEY || 'claveGenerica'
              );
              // process.env.SECRET_KEY!) // ts esto no va a ser null

              res.json({
                token,
                // msg: 'ok',
                // Body: req.body,
              });
            } else {
              res.json({
                msg: 'Wrong password',
                // Body: req.body,
              });
            }
          });
        }
        console.log(data);
      }
    }
  );
};
// http://localhost:3001/api/usuarios/login
// {
//   "nombre": "Pedro",
//   "password": "Pedro123"
// }

export const getUsuarios = (req: Request, res: Response) =>
  connection.query('SELECT * FROM usuarios', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ data });
    }
  });

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
const validateToken = (req: Request, res: Response, next: NextFunction) => {
  //   console.log('Validate token');
  const headerToken = req.headers['authorization'];
  //   console.log(headerToken);

  //   Verify the token with Bearer

  if (headerToken != undefined && headerToken.startsWith('Bearer')) {
    //have token?
    // Take the Elements between the space
    // const bearerToken = headerToken.split(' ');   //method 1
    // console.log(headerToken[1]);
    const bearerToken = headerToken.slice(7); //method 2: cut next the bearer that is in the position 7 of char
    // console.log(headerToken);

    try {
      const tokenValido = jwt.verify(
        bearerToken,
        process.env.SECRET_KEY || 'claveGenerica'
      );
      console.log(tokenValido);

      next(); //Ejecuta la siguiente función
    } catch (error) {
      res.status(400).json({ error: 'No valid token' });
    }
  } else {
    res.status(400).json({
      error: 'Acceso denegado',
    });
  }
};
export default validateToken;

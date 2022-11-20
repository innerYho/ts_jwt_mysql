import express, { Application } from 'express';
import connection from '../db/connection';
import routesProducto from '../routes/producto.routes';
import routesPro from '../routes/pro.routes';
import routesUsuario from '../routes/usuario.routes';
import routesDefault from '../routes/default.routes';

export default class Server {
  // private app: express.Application;
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    // this.port = '3000';
    this.port = process.env.PORT || '3000';
    this.listen();
    this.conectDB();
    this.midleware();
    this.routes();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server run in port:', this.port);
    });
  }

  conectDB() {
    connection.connect((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Base de datos conectada exitosamente!');
      }
    });
  }

  routes() {
    this.app.use('/', routesDefault);
    this.app.use('/api/productos', routesProducto);
    this.app.use('/api/pro', routesPro);
    this.app.use('/api/usuarios', routesUsuario);
    // this.app.use('/api/get/usuario', routesUsuario);
  }

  midleware() {
    this.app.use(express.json());
  }
}

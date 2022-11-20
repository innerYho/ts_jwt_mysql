import { Router } from 'express';
import {
  addUsuario,
  getUsuarios,
  loginUser,
} from '../controllers/usuario.controller';

const router = Router();

router.post('/', addUsuario);
router.get('/get', getUsuarios);
router.post('/login', loginUser);

export default router;

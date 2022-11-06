import { Router } from 'express'
import { addUsuario } from '../controllers/usuario.controller';

const router = Router()

router.post('/', addUsuario)
//45
export default router
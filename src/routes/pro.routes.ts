import { Router } from 'express';
import { getPro } from '../controllers/pro.controller';

const router = Router();

router.get('/', getPro);

export default router;

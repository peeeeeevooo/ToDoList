import {Router} from 'express';
import UserController from '../controller/user_controller.js';

const router = Router();

router.post('/user', UserController.create);

export default router;
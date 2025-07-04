import {Router} from 'express';
import UserController from '../controller/user_controller.js';

const router = Router();

router.post('/user', UserController.create);
router.get('/user/:email/:password', UserController.getUser);
router.get('/user', UserController.getUsers);

export default router;
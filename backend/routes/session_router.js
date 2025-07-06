import {Router} from 'express';
import SessionController from '../controller/session_controller.js';

const router = Router();

router.get('/session', SessionController.getSessions)
router.post('/session', SessionController.createSession)
router.delete('/session', SessionController.deleteSession);

export default router;
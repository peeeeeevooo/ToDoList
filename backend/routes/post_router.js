import {Router} from 'express';
import PostController from '../controller/post_controller.js';

const router = new Router();

router.post('/post', PostController.create);
router.put('/post', PostController.update);
router.delete('/post/:id', PostController.delete);
router.get('/post/:id',PostController.getAll);
router.get('/post/true/:id',PostController.getCompleted);
router.get('/post/false/:id',PostController.getNotCompleted);


export default router;
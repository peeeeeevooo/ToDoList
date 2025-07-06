import express from 'express';
import userRouter from './routes/user_router.js'
import postRouter from './routes/post_router.js'
import sessionRouter from './routes/session_router.js'

const PORT = 3001

const app = express();
app.use(express.json());
app.use('/api', userRouter);
app.use('/api', postRouter);
app.use('/api', sessionRouter);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
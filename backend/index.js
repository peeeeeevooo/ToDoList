import express from 'express';
import userRouter from './routes/user_router.js'

const PORT = 3001

const app = express();
app.use(express.json());
app.use('/api', userRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
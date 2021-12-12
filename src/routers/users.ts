import express from 'express';
import example from '../controllers/example';

const usersRouter = express.Router();

usersRouter.post('/', example.getRoute);

export default usersRouter;

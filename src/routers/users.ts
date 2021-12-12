import express from 'express';
import userController from '../controllers/users';

const usersRouter = express.Router();

usersRouter.post('/', userController.createUser);

export default usersRouter;

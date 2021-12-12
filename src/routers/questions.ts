import express from 'express';
import example from '../controllers/example';

const questionsRouter = express.Router();

questionsRouter.get('/', example.getRoute);

questionsRouter.post('/', example.getRoute);

questionsRouter.get('/:id', example.getRoute);

questionsRouter.post('/:id', example.getRoute);

questionsRouter.put('/:id/up-vote', example.getRoute);

questionsRouter.put('/:id/down-vote', example.getRoute);

export default questionsRouter;

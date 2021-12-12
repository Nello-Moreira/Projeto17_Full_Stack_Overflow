import express from 'express';
import questionsController from '../controllers/questions';

const questionsRouter = express.Router();

questionsRouter.get('/', questionsController.getQuestions);

questionsRouter.post('/', questionsController.createQuestion);

questionsRouter.get('/:id', questionsController.getSpecificQuestion);

questionsRouter.post('/:id', questionsController.answer);

questionsRouter.put('/:id/up-vote', questionsController.upvote);

questionsRouter.put('/:id/down-vote', questionsController.downvote);

export default questionsRouter;

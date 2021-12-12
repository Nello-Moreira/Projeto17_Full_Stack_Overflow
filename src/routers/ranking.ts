import express from 'express';
import rankingController from '../controllers/ranking';

const rankingRouter = express.Router();

rankingRouter.get('/', rankingController.getTopUsers);

export default rankingRouter;

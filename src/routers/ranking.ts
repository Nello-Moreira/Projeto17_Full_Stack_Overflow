import express from 'express';
import example from '../controllers/example';

const rankingRouter = express.Router();

rankingRouter.get('/', example.getRoute);

export default rankingRouter;

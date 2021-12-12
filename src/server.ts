import '../setup/dotenvSetup';
import express from 'express';
import cors from 'cors';

import databaseErrorMiddleware from './middlewares/databaseError';

import questionsRouter from './routers/questions';
import usersRouter from './routers/users';
import rankingRouter from './routers/ranking';

const server = express();
server.use(cors());
server.use(express.json());

server.use('/users', usersRouter);

server.use('/questions', questionsRouter);

server.use('/ranking', rankingRouter);

server.use(databaseErrorMiddleware);

export default server;

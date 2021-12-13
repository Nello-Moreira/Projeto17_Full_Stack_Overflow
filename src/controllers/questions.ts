import { Request, Response, NextFunction } from 'express';
import statusCodes from './statusCodes';
import { isInvalidQuestion } from '../validation/questions';
import questionsService from '../services/questions';

async function getQuestions(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		return response.sendStatus(statusCodes.notImplemented);
	} catch (error) {
		next(error);
	}
}

async function getSpecificQuestion(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		return response.sendStatus(statusCodes.notImplemented);
	} catch (error) {
		next(error);
	}
}

async function createQuestion(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const newQuestion = request.body;

	const invalidQuestion = isInvalidQuestion(newQuestion);

	if (invalidQuestion) {
		return response.sendStatus(statusCodes.badRequest);
	}

	try {
		const questionId = await questionsService.createQuestion(newQuestion);

		return response.status(statusCodes.ok).send({ id: questionId });
	} catch (error) {
		next(error);
	}
}

async function answer(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		return response.sendStatus(statusCodes.notImplemented);
	} catch (error) {
		next(error);
	}
}

async function upvote(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		return response.sendStatus(statusCodes.notImplemented);
	} catch (error) {
		next(error);
	}
}

async function downvote(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		return response.sendStatus(statusCodes.notImplemented);
	} catch (error) {
		next(error);
	}
}

export default {
	getQuestions,
	getSpecificQuestion,
	createQuestion,
	answer,
	upvote,
	downvote,
};

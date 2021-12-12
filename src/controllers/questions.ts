import { Request, Response, NextFunction } from 'express';

async function getQuestions(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		return response.sendStatus(501);
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
		return response.sendStatus(501);
	} catch (error) {
		next(error);
	}
}

async function createQuestion(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		return response.sendStatus(501);
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
		return response.sendStatus(501);
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
		return response.sendStatus(501);
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
		return response.sendStatus(501);
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

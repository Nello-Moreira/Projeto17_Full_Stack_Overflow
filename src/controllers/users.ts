import { Request, Response, NextFunction } from 'express';

async function createUser(
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

export default { createUser };

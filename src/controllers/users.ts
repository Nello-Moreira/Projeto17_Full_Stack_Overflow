import { Request, Response, NextFunction } from 'express';
import statusCodes from './statusCodes';

async function createUser(
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

export default { createUser };

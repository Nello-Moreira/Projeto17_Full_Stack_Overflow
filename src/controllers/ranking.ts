import { Request, Response, NextFunction } from 'express';

async function getTopUsers(
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

export default { getTopUsers };

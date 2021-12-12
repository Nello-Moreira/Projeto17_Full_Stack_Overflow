/* eslint-disable no-console */
import { Request, Response, NextFunction } from 'express';

export default function databaseErrorMiddleware(
	error: Error,
	request: Request,
	response: Response,
	next: NextFunction
) {
	console.error(error);
	return response.sendStatus(500);
}

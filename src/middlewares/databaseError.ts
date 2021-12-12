/* eslint-disable no-console */
import { Request, Response, NextFunction } from 'express';
import statusCodes from '../controllers/statusCodes';

export default function databaseErrorMiddleware(
	error: Error,
	request: Request,
	response: Response,
	next: NextFunction
) {
	console.error(error);
	return response.sendStatus(statusCodes.notImplemented);
}

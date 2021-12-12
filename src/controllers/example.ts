import { Request, Response, NextFunction } from 'express';
import exampleService from '../services/example';
import ExampleError from '../errors/Example';

async function getRoute(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		await exampleService.searchExamples();

		return response.sendStatus(501);
	} catch (error) {
		if (error.name === 'ExampleError') {
			return response.sendStatus(501);
		}

		next(error);
	}
}

export default { getRoute };

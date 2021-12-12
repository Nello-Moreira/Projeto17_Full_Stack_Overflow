import { Request, Response, NextFunction } from 'express';
import statusCodes from './statusCodes';
import usersService from '../services/users';
import NewUser from '../protocols/NewUser.interface';
import { isInvalidUser } from '../validation/users';

async function createUser(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const newUser: NewUser = request.body;

	const invalidUser = isInvalidUser(newUser);

	if (invalidUser) {
		return response.status(statusCodes.badRequest).send(invalidUser.message);
	}

	try {
		const token = await usersService.createUser(newUser);

		return response.status(statusCodes.ok).send({ token });
	} catch (error) {
		next(error);
	}
}

export default { createUser };

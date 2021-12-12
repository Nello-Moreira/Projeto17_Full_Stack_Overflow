import { v4 as uuid } from 'uuid';
import usersRepository from '../repositories/users';
import NewUser from '../protocols/NewUser.interface';

async function createUser(newUser: NewUser): Promise<string> {
	const token = uuid();

	await usersRepository.insertUser({ ...newUser, token });

	return token;
}

export default { createUser };

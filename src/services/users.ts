import { v4 as uuid } from 'uuid';
import usersRepository from '../repositories/users';
import NewUser from '../protocols/NewUser.interface';
import DbUser from '../protocols/DbUser.interface';

async function createUser(newUser: NewUser): Promise<string> {
	const token = uuid();

	await usersRepository.insertUser({ ...newUser, token });

	return token;
}

async function searchUserByToken(token: string): Promise<DbUser> {
	const user = await usersRepository.searchUserByToken(token);

	return user;
}

export default { createUser, searchUserByToken };

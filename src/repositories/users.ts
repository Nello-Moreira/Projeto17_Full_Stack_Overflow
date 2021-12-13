import dbConnection from './connection';
import User from '../protocols/User.interface';
import DbUser from '../protocols/DbUser.interface';

async function insertUser(user: User): Promise<number> {
	const { name, studyClass, token } = user;

	const createdUser = await dbConnection.query(
		`INSERT INTO users
		(name, study_class, token)
		VALUES ($1, $2, $3)
		RETURNING id;`,
		[name, studyClass, token]
	);
	return createdUser.rows[0].id;
}

async function searchUserByToken(token: string): Promise<DbUser> {
	const queryResult = await dbConnection.query(
		'SELECT * FROM users WHERE token = $1;',
		[token]
	);

	return queryResult.rows[0];
}

export default { insertUser, searchUserByToken };

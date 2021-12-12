import dbConnection from './connection';
import User from '../protocols/User.interface';

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

export default { insertUser };

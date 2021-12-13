import User from './User.interface';

interface DbUser extends User {
	id: number;
}

export default DbUser;

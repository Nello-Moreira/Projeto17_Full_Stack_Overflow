import NewUser from './NewUser.interface';

interface User extends NewUser {
	token: string;
}

export default User;

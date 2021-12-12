import Joi from 'joi';
import NewUser from '../protocols/NewUser.interface';

const usersSchema = Joi.object({
	name: Joi.string().min(1).required(),
	studyClass: Joi.string().min(1).required(),
});

const isInvalidUser = (newUser: NewUser) => usersSchema.validate(newUser).error;

export { isInvalidUser };

import Joi from 'joi';
import NewUser from '../protocols/NewUser.interface';
import NewQuestion from '../protocols/NewQuestion.interface';

const questionSchema = Joi.object({
	question: Joi.string().min(1).required(),
	userToken: Joi.string().guid({ version: ['uuidv4'] }),
	tags: Joi.string().min(1).required(),
});

const isInvalidQuestion = (newQuestion: NewQuestion) => questionSchema.validate(newQuestion).error;

const idSchema = Joi.number().integer().min(1).required();

const isInvalidId = (id: number) => idSchema.validate(id).error;

export { isInvalidQuestion, isInvalidId };

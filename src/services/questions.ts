import questionsRepository from '../repositories/questions';
import NewQuestion from '../protocols/NewQuestion.interface';
import Question from '../protocols/Question.interface';

import usersService from '../services/users';

async function createQuestion(newQuestion: NewQuestion): Promise<number> {
	const user = await usersService.searchUserByToken(newQuestion.userToken);

	const question: Question = {
		question: newQuestion.question,
		tags: newQuestion.tags,
		studentId: user.id,
		submittedAt: new Date(),
		score: 0,
		answered: false,
	};

	return await questionsRepository.insertQuestion(question);
}

export default { createQuestion };

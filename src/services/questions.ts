import questionsRepository from '../repositories/questions';
import NewQuestion from '../protocols/NewQuestion.interface';
import Question from '../protocols/Question.interface';

import usersService from '../services/users';
import DbQuestion from '../protocols/DbQuestion.interface';
import NoContentError from '../errors/NoContent';

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

async function getUnansweredQuestions(): Promise<DbQuestion[]> {
	const unansweredQuestions = await questionsRepository.searchUnansweredQuestions();

	if (unansweredQuestions.length === 0) {
		throw new NoContentError('There are no unanswered questions');
	}

	return unansweredQuestions;
}

export default { createQuestion, getUnansweredQuestions };

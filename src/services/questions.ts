import questionsRepository from '../repositories/questions';
import NewQuestion from '../protocols/NewQuestion.interface';
import Question from '../protocols/Question.interface';

import usersService from '../services/users';
import DbQuestion from '../protocols/DbQuestion.interface';
import NoContentError from '../errors/NoContent';
import NotFoundError from '../errors/NotFound';

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

async function answer(answerObject: {
	userToken: string;
	questionId: number;
	answer: string;
}): Promise<number> {
	const { questionId, answer, userToken } = answerObject;

	if (!(await questionsRepository.questionExists(questionId))) {
		throw new NotFoundError(`There is no question with id ${questionId}`);
	}

	const user = await usersService.searchUserByToken(userToken);

	if (!user) {
		throw new NotFoundError(`Invalid user token`);
	}

	const answerId = await questionsRepository.insertAnswer({
		questionId: questionId,
		studentId: user.id,
		answeredAt: new Date(),
		answer: answer,
	});

	await questionsRepository.markQuestionAsAnswered(questionId);

	return answerId;
}

async function getSpecificQuestion(questionId: number) {
	const question = await questionsRepository.searchQuestionById(questionId);

	if (!question) {
		throw new NotFoundError('There are no questions with this id');
	}

	if (!question.answered) {
		return {
			question: question.question,
			student: question.student,
			studyClass: question.studyClass,
			tags: question.tags,
			answered: question.answered,
			submittedAt: question.submittedAt,
		};
	}

	const answer = await questionsRepository.searchAnswerByQuestionId(questionId);

	return {
		question: question.question,
		student: question.student,
		studyClass: question.studyClass,
		tags: question.tags,
		answered: question.answered,
		submittedAt: question.submittedAt,
		answeredAt: answer.answeredAt,
		answeredBy: answer.answeredBy,
		answer: answer.answer,
	};
}

export default { createQuestion, getUnansweredQuestions, answer, getSpecificQuestion };

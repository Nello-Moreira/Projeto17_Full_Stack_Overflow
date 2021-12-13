import dbConnection from './connection';
import Question from '../protocols/Question.interface';
import DbQuestion from '../protocols/DbQuestion.interface';
import Answer from '../protocols/Answer.interface';

const questionBaseQuery = `
	SELECT
		questions.id, questions.question, questions.tags,
		questions.score, questions.submitted_at AS "submittedAt", questions.answered,
		users.name as student, users.study_class AS "studyClass"
	FROM questions
	JOIN users
		ON users.id = questions.student_id
`;

async function insertQuestion(questionObject: Question): Promise<number> {
	const { question, tags, studentId, submittedAt, score, answered } = questionObject;

	const createdQuestion = await dbConnection.query(
		`INSERT INTO questions
		(student_id, question, tags, submitted_at, score, answered)
		VALUES ($1, $2, $3, $4, $5, $6)
		RETURNING id;`,
		[studentId, question, tags, submittedAt, score, answered]
	);

	return createdQuestion.rows[0].id;
}

async function searchUnansweredQuestions(): Promise<DbQuestion[]> {
	const queryResult = await dbConnection.query(
		`${questionBaseQuery}
		WHERE questions.answered = false;`
	);
	return queryResult.rows;
}

async function searchQuestionById(questionId: number): Promise<DbQuestion> {
	const queryResult = await dbConnection.query(
		`${questionBaseQuery}
		WHERE questions.id = $1`,
		[questionId]
	);

	return queryResult.rows[0];
}

async function searchAnswerByQuestionId(questionId: number): Promise<Answer> {
	const queryResult = await dbConnection.query(
		`SELECT
			answers.id, answers.answered_at AS "answeredAt" , answers.answer,
			users.name AS "answeredBy"
		FROM answers
		JOIN users
			ON users.id = answers.student_id
		WHERE question_id = $1`,
		[questionId]
	);

	return queryResult.rows[0];
}

async function markQuestionAsAnswered(questionId: number): Promise<boolean> {
	await dbConnection.query('UPDATE questions SET answered = true WHERE questions.id = $1', [
		questionId,
	]);

	return true;
}

async function insertAnswer(answerObject: {
	questionId: number;
	studentId: number;
	answeredAt: Date;
	answer: string;
}): Promise<number> {
	const queryResult = await dbConnection.query(
		`INSERT INTO answers
		(question_id, student_id, answered_at, answer)
		VALUES ($1, $2, $3, $4)
		RETURNING id;`,
		[answerObject.questionId, answerObject.studentId, answerObject.answeredAt, answerObject.answer]
	);

	return queryResult.rows[0].id;
}

async function questionExists(questionId: number): Promise<boolean> {
	const question = await dbConnection.query('SELECT id FROM questions WHERE questions.id = $1', [
		questionId,
	]);

	if (question.rowCount > 0) return true;
	return false;
}

export default {
	insertQuestion,
	searchUnansweredQuestions,
	insertAnswer,
	markQuestionAsAnswered,
	searchQuestionById,
	questionExists,
	searchAnswerByQuestionId,
};

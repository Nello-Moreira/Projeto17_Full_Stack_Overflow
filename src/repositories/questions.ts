import dbConnection from './connection';
import Question from '../protocols/Question.interface';

async function insertQuestion(questionObject: Question): Promise<number> {
	const { question, tags, studentId, submittedAt, score, answered } =
		questionObject;

	const createdQuestion = await dbConnection.query(
		`INSERT INTO questions
		(student_id, question, tags, submitted_at, score, answered)
		VALUES ($1, $2, $3, $4, $5, $6)
		RETURNING id;`,
		[studentId, question, tags, submittedAt, score, answered]
	);

	return createdQuestion.rows[0].id;
}

export default { insertQuestion };

import dbConnection from './connection';
import Question from '../protocols/Question.interface';
import DbQuestion from '../protocols/DbQuestion.interface';

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
		`SELECT
			questions.id, questions.question, questions.tags,
			questions.score, questions.submitted_at AS "submittedAt",
			users.name as student, users.study_class AS "studyClass"
		FROM questions
		JOIN users
			ON users.id = questions.student_id
		WHERE answered = false;`
	);
	return queryResult.rows;
}

export default { insertQuestion, searchUnansweredQuestions };

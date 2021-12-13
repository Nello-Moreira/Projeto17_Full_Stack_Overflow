import Question from './Question.interface';

interface DbQuestion {
	id: number;
	question: string;
	tags: string;
	score: number;
	submittedAt: Date;
	student: number;
	answered: boolean;
	studyClass: string;
}

export default DbQuestion;

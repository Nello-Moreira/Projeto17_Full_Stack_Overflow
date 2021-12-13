import Question from './Question.interface';

interface DbQuestion extends Question {
	id: number;
}

export default DbQuestion;

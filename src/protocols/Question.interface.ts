interface Question {
	question: string;
	tags: string;
	studentId: number;
	submittedAt: Date;
	score: number;
	answered: boolean;
}

export default Question;

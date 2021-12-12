import exampleRepository from '../repositories/example';
import ExampleError from '../errors/Example';
import User from '../protocols/User.interface';

async function searchExamples(): Promise<User[]> {
	const examples = await exampleRepository.searchAllExamples();

	if (examples.length === 0) {
		throw new ExampleError('There are no examples');
	}

	return examples;
}

export default { searchExamples };

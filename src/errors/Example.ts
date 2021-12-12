export default class ExampleError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'ExampleError';
	}
}

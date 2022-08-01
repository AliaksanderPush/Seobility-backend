import { App } from './app';
import { UserController } from './controllers/user/user.controller';

async function start() {
	const app = new App(new UserController());
	await app.init();
}

start();

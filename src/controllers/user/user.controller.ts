import { Request, Response } from 'express';
import { UserRegisterDto } from '../../dto/user.dto';
import { ValidateMidleWare } from '../../middleware/validate.middleware';
import { BaseController } from '../base/base.controller';

export class UserController extends BaseController {
	constructor() {
		super();
		this.bindRouters([
			{
				path: '/register',
				methot: 'post',
				func: this.register,
				middlewares: [new ValidateMidleWare(UserRegisterDto)],
			},
		]);
	}

	register(req: Request, res: Response) {
		console.log(req.body);
		this.ok(res, 'success');
	}
}

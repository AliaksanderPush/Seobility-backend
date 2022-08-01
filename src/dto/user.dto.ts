import { IsEmail, IsInt, Length, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsString({ message: 'Имя слишко короткое или слишко длинное' })
	@Length(7, 61)
	username: string;
	@IsEmail({}, { message: 'Ведите корректный email' })
	email: string;
	@IsString({ message: 'Некоректно введена дата' })
	@Length(10)
	birthday: string;
	@IsString({ message: 'Неверный номер' })
	telephone: string;
	@IsString({ message: 'Введите пароль' })
	@Length(10, 300)
	message: string;
}

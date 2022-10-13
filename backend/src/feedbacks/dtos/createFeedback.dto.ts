import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateFeedbackDto {
  @IsNotEmpty()
  @IsString()
  username:string

  @IsNotEmpty()
  @IsEmail()
  email:string

  @IsNotEmpty()
  @IsString()
  message:string
}
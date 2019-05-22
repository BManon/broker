import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly first_name: string;

  @IsString()
  @IsNotEmpty()
  readonly last_name: string;

  @IsEmail()
  @IsOptional()
  readonly  email: string;
}
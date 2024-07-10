import { Transform } from "class-transformer"
import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator"

export class LoginDto {

    @IsEmail()
    @IsNotEmpty()
    email: string

    @Transform(({ value }) => value.trim())
    @IsString()
    @IsNotEmpty()
    @MaxLength(8)
    password: string

}
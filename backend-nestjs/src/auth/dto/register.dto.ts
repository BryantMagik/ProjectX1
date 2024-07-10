import { IsEnum, IsNotEmpty, IsString, MaxLength } from "class-validator"
import { Role_User } from "@prisma/client"
import { Transform } from "class-transformer"

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    username: string

    @IsString()
    @IsNotEmpty()
    first_name: string

    @IsString()
    @IsNotEmpty()
    last_name: string

    @Transform(({value}) => value.trim())
    @IsString()
    @IsNotEmpty()
    @MaxLength(8)
    password: string

    @IsEnum(Role_User)
    @IsNotEmpty()
    role: Role_User;
}
import { IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Causes } from "src/common/exception/causes";

export class LoginRegister {
    @IsString({ message: JSON.stringify(Causes.USERNAME_STRING) })
    @IsNotEmpty({ message: JSON.stringify(Causes.USERNAME_EMPTY) })
    username: string;

    @IsString({ message: JSON.stringify(Causes.PASSWORD_STRING) })
    @IsNotEmpty({ message: JSON.stringify(Causes.PASSWORD_EMPTY) })
    password: string;
}
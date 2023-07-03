import { HttpStatus } from '@nestjs/common';
import { JsonException } from './exception.dto';

export class Causes {
    public static USER_ALERADY_EXISTED = {
        message: "Username already existed. You can register this username again",
        error_code: "USER_ALERADY_EXISTED",
    }

    public static USER_NOT_EXISTED = {
        message: "Username not existed. Please register",
        error_code: "USER_NOT_EXISTED",
    }

    public static PASSWORD_NOT_MATCH = {
        message: "Password not matched!",
        error_code: "PASSWORD_NOT_MATCH",
    }

    public static USERNAME_EMPTY = {
        message: "Username must not be empty",
        error_code: "USERNAME_EMPTY",
    }

    public static USERNAME_STRING = {
        message: "Username must be string",
        error_code: "USERNAME_STRING",
    }

    public static PASSWORD_EMPTY = {
        message: "Password must not be empty",
        error_code: "PASSWORD_EMPTY",
    }

    public static PASSWORD_STRING = {
        message: "Password must not be a string",
        error_code: "PASSWORD_STRING",
    }

    public static PASSWORD_MIN_LENGTH = {
        message: "Password is too short, at least 6 characters",
        error_code: "PASSWORD_MIN_LENGTH",
    }

    public static PASSWORD_MAX_LENGTH = {
        message: "Password is too long, no longer then 20 characters",
        error_code: "PASSWORD_MAX_LENGTH",
    }
}
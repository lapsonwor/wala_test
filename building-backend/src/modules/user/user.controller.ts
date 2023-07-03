import { Controller, Get, Param, Post, Body, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginRegister } from "./entities/loginregister.dto";
import { JsonException } from 'src/common/exception/exception.dto';
import { Causes } from 'src/common/exception/causes';

@Controller('User')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('register')
  async register(@Body() data: LoginRegister): Promise<Boolean> {
    {
      if (data.username) {
        return this.userService.register(data);
      } else {
        throw new JsonException(Causes.USERNAME_EMPTY.message, HttpStatus.BAD_REQUEST, Causes.USERNAME_EMPTY.error_code);
      }
      return false;
    }
  }

  @Post('login')
  async login(@Body() data: LoginRegister): Promise<Boolean> {
    {
      if (data.username) {
        return this.userService.login(data);
      } else {
        throw new JsonException(Causes.USERNAME_EMPTY.message, HttpStatus.BAD_REQUEST, Causes.USERNAME_EMPTY.error_code);
      }
      return false;
    }
  }
}
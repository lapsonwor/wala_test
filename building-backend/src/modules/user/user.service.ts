import { Injectable, NotFoundException } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomErrorMessage } from 'src/common/constants/error-message';
import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';
import { Causes } from 'src/common/exception/causes';
import { HttpStatus } from "@nestjs/common";
import { JsonException } from 'src/common/exception/exception.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) { }

  async getUserByUsername(username: string) {
    return this.userRepository.getUserByUsername(username);
  }
  async createUser(data: any) {
    let user = new User();
    user.id = null;
    user.username = data.username;
    user.password = data.password;
    await this.userRepository.createQueryBuilder().insert()
      .into(User)
      .values(user)
      .execute();
    return true;
  }

  async register(data: any): Promise<any> {
    let oldUser = await this.getUserByUsername(data.username);
    if (oldUser) {
      throw new JsonException(Causes.USER_ALERADY_EXISTED.message, HttpStatus.BAD_REQUEST, Causes.USER_ALERADY_EXISTED.error_code);
    }
    data.password = await this.genPassword(data.password);
    return this.createUser(data);
  }

  genPassword = async (password) => {
    const salt = await bcrypt.genSalt(5);
    return bcrypt.hash(password, salt);
  }

  async login(data: any): Promise<any> {
    let user = await this.getUserByUsername(data.username);
    if (user) {
      const isMatch = await bcrypt.compare(data.password, user.password);
      if (isMatch) {
        return {
          "token": user.password
        };
      } else {
        throw new JsonException(Causes.PASSWORD_NOT_MATCH.message, HttpStatus.BAD_REQUEST, Causes.PASSWORD_NOT_MATCH.error_code);
      }
    } else {
      throw new JsonException(Causes.USER_NOT_EXISTED.message, HttpStatus.BAD_REQUEST, Causes.USER_NOT_EXISTED.error_code);
    }
  }
}

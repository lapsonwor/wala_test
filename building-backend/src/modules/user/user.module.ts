import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

const getControllers = (): Array<any> => {
    return [UserController];
};
@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: getControllers(),
    providers: [UserService, UserRepository],
    exports: [UserService],
})

export class UserModule { }

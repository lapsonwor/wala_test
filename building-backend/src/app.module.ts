import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingsModule } from './modules/buildings/buildings.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { Connection } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || '127.0.0.1',
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_DATABASE || 'wala_test',
      entities: ['dist/modules/**/*.entity.js'],
      // subscribers: ['dist/src/database/**/*.subscriber{ .ts,.js}'],
      // seeds: ['dist/src/database/seeders/*.seed{.ts,.js}'],
      // migrations: ['dist/src/database/migrations/*.ts}'],
      synchronize: false,
      logging: false,
    }),
    BuildingsModule, UserModule
  ],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {
  constructor(private connection: Connection) { }
}

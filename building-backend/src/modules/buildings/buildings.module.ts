import { Module } from '@nestjs/common';
import { Buildings } from './entities/buildings.entity';
import { BuildingsService } from './buildings.service';
import { BuildingsController } from './buildings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingsRepository } from './buildings.repository';

const getControllers = (): Array<any> => {
    return [BuildingsController];
};
@Module({
    imports: [TypeOrmModule.forFeature([Buildings])],
    controllers: getControllers(),
    providers: [BuildingsService, BuildingsRepository],
    exports: [BuildingsService],
})

export class BuildingsModule { }

import { Controller, Get, Param } from '@nestjs/common';
import { BuildingsService } from './buildings.service';

@Controller('Buildings')
export class BuildingsController {
  constructor(private readonly buildingsService: BuildingsService) { }

  @Get('getAverageEui')
  async getMetaDataByTokenId_ori() {
    return this.buildingsService.getAllAverageEUI();
  }

  @Get('getBuildings')
  async getBuildings() {
    return this.buildingsService.getBuildings();
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomErrorMessage } from 'src/common/constants/error-message';
import { BuildingsRepository } from './buildings.repository';

@Injectable()
export class BuildingsService {
  constructor(
    @InjectRepository(BuildingsRepository)
    private buildingsRepository: BuildingsRepository,
  ) { }

  async getAllAverageEUI() {
    const result = await this.buildingsRepository.getAverageEui();
    if (result) {
      return result;
    } else {
      throw new NotFoundException(CustomErrorMessage['NOT_FOUND']);
    }
  }

  async getBuildings() {
    const result = await this.buildingsRepository.getBuildings();
    if (result) {
      return result;
    } else {
      throw new NotFoundException(CustomErrorMessage['NOT_FOUND']);
    }
  }
}

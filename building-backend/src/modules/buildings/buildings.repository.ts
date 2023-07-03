import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Buildings } from './entities/buildings.entity';

@Injectable()
export class BuildingsRepository extends Repository<Buildings> {
  constructor(private dataSource: DataSource) {
    super(Buildings, dataSource.createEntityManager());
  }

  async getAverageEui() {
    return this.query(`SELECT 
    type, 
    avg(eui) AS average_eui 
  FROM 
    (
      SELECT 
        t.OSEBuildingID AS id, 
        t.PrimaryPropertyType AS type, 
        t2.electricity / t1.gfa AS eui 
      FROM 
        buildings t 
        LEFT JOIN (
          SELECT 
            OSEBuildingID AS id, 
            SUM(PropertyUseTypeGFA) AS gfa 
          FROM 
            buildings_gfa 
          GROUP BY
            OSEBuildingID
        ) t1 ON t.OSEBuildingID = t1.id 
        LEFT JOIN (
          SELECT 
            OSEBuildingID AS id, 
            value AS electricity 
          FROM 
            metrics 
          WHERE 
            metric = 'Electricity'
        ) t2 ON t.OSEBuildingID = t2.id
    ) AS Averge
  GROUP BY
    type
  `)
  }

  async getBuildings() {
    return this.query(`SELECT PrimaryPropertyType, PropertyName, Address, NumberOfFloors, CouncilDistrictCode, YearBuilt From buildings`);
  }
}

import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('buildings')
export class Buildings {
    @PrimaryGeneratedColumn()
    OSEBuildingID: number;

    @Column({ nullable: false, name: 'DataYear' })
    DataYear: number;

    @Column({ nullable: false, name: 'BuildingType' })
    BuildingType: string;

    @Column({ nullable: false, name: 'PrimaryPropertyType' })
    PrimaryPropertyType: string;
}

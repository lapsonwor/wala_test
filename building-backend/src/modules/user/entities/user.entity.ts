import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    Index
} from 'typeorm';

@Entity('user')
@Index('username', ['username'], { unique: true })
export class User {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
    id: number;

    @Column({ nullable: false, name: 'username', unique: true })
    username: string;

    @Column({ nullable: false, name: 'password' })
    password: string;
}

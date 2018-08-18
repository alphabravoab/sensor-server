import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, CreateDateColumn } from 'typeorm'
import { IsString } from 'class-validator';

@Entity()
export default class Sensor extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number
  
    @IsString()
    @Column('int')
    value: number

    @CreateDateColumn()
    timestamp: string;
   

}

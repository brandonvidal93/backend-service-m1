import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Computer {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  brand?: string;

  @Column()
  model?: string;

  @Column()
  price?: number;

  @Column()
  stock?: number;
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Guestbook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  username: string;

  @Column()
  userId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({
    default: false,
  })
  isDeleted: boolean;
}

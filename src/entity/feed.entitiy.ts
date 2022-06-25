import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity("feed")
export class FeedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cat_id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
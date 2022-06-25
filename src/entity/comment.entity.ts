import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity("comment")
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  feed_id: number;

  @Column()
  userName: string;

  @Column()
  comment: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
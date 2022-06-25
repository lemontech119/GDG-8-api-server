import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity("album")
export class AlbumEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  cat_id: number;

  @Column()
  image_url: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
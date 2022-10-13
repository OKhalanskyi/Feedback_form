import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"feedbacks"})
export class Feedback {
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  username:string

  @Column()
  email:string

  @Column()
  message:string
}
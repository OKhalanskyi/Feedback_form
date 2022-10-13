import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {FeedbackModule} from "./feedbacks/feedback.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from './mysql/typeorm/Feedback';


@Module({
  imports: [FeedbackModule,
    ConfigModule.forRoot({envFilePath:'config/.env.dev'}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST_DB,
      port: parseInt(process.env.PORT_DB),
      username: process.env.USERNAME_DB,
      password: process.env.PASSWORD_DB,
      database: process.env.DATABASE_DB,
      entities: [Feedback],
      synchronize: true,
  })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

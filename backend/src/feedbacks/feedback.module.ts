import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from '../mysql/typeorm/Feedback';
import { FeedbackController } from './feedback.controller';
import { Services } from '../utils/services';
import { FeedbackService } from './feedback.service';


@Module({
    imports: [TypeOrmModule.forFeature([Feedback])],
    controllers: [FeedbackController],
    providers: [{
        provide:Services.FEEDBACK,
        useClass:FeedbackService
    }],
})
export class FeedbackModule {}

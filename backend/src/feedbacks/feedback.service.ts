import { Injectable } from '@nestjs/common';
import { IFeedbackService } from './Feedback.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Feedback } from '../mysql/typeorm/Feedback';
import { Repository } from 'typeorm';
import { FeedbackParams } from '../utils/types';

@Injectable()
export class FeedbackService implements IFeedbackService{
  constructor(@InjectRepository(Feedback) private  feedBackRepository:Repository<Feedback>) {
  }
  createFeedback(feedBackParams:FeedbackParams){
    const newFeedback = this.feedBackRepository.create(feedBackParams)
    return this.feedBackRepository.save(newFeedback)
  }

  getFeedbackById(id:number):Promise<Feedback>{
    return this.feedBackRepository.findOneBy({ id } )
  }

  getAllFeedbacks(): Promise<Feedback[]> {
    return this.feedBackRepository.find()
  }
}
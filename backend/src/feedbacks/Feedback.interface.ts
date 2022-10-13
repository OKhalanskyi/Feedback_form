import { FeedbackParams } from '../utils/types';
import { Feedback } from '../mysql/typeorm/Feedback';

export interface IFeedbackService{
  createFeedback(feedbackParams:FeedbackParams):Promise<Feedback>
  getFeedbackById(id:number):Promise<Feedback>
  getAllFeedbacks():Promise<Feedback[]>
}
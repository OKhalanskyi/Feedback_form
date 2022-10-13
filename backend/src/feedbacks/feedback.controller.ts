import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { Routes } from '../utils/routes';
import { Services } from '../utils/services';
import { IFeedbackService } from './Feedback.interface';
import { CreateFeedbackDto } from './dtos/createFeedback.dto';

@Controller(Routes.FEEDBACK)
export class FeedbackController{
  constructor(@Inject(Services.FEEDBACK) private feedbackService:IFeedbackService) {
  }
  @Post()
  async createFeedback(@Body() createFeedbackDto:CreateFeedbackDto){
    return this.feedbackService.createFeedback(createFeedbackDto)
  }

  @Get(':id')
  async getFeedbackById(@Param('id') id:number){
    return await this.feedbackService.getFeedbackById(id)
  }

  @Get()
  async getAllFeedbacks(){
    return this.feedbackService.getAllFeedbacks()
  }
}
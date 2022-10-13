import axios, { AxiosRequestConfig} from "axios";
import { FeedbackParams } from './types';

const config:AxiosRequestConfig = {withCredentials:true}

export const postCreateFeedback = (data:FeedbackParams)=>{
  axios.post(`http://localhost:8001/api/feedback`, data, config)
}

export const getAllFeedbacks =()=>
  axios.get<FeedbackParams[]>(`http://localhost:8001/api/feedback`, config)

export const getFeedbackById = (id: number) =>
  axios.get(`http://localhost:8001/api/feedback/${id}`, config);

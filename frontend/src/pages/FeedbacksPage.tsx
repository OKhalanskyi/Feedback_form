import React, { useEffect, useState } from 'react';
import { FeedbackParams } from '../utils/types';
import { getAllFeedbacks } from '../utils/api';
import FeedbackContainer from '../components/FeedbackContainer/FeedbackContainer';

const FeedbacksPage = () => {
    const [feedbacks, setFeedbacks] = useState<FeedbackParams[]>([])

    useEffect(()=>{
      getAllFeedbacks()
        .then(({data})=>{
          setFeedbacks(data)
      }).catch(err=>console.log(err))
    },[])

    return (
        <div>
          <FeedbackContainer feedbacks={feedbacks}/>
        </div>
    );
};

export default FeedbacksPage;
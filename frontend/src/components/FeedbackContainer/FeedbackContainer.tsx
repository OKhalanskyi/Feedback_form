import React from 'react';
import {FeedbackProps } from '../../utils/types';
import FeedbackItem from './FeedbackItem';
import {FeedbackContainerStyle} from '../../utils/styled-components';

const FeedbackContainer:React.FC<FeedbackProps> = ({feedbacks}) => {
  return (
    <FeedbackContainerStyle>
      {feedbacks.map((each)=>(
        <FeedbackItem key={each.id} id={each.id} username={each.username} email={each.email} message={each.message}/>
      ))}
    </FeedbackContainerStyle>
  );
};

export default FeedbackContainer;
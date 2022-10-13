import React from 'react';
import { FeedbackParams } from '../../utils/types';
import {FeedbackItemStyle} from '../../utils/styled-components';
import styles from './index.module.scss'

const FeedbackItem:React.FC<FeedbackParams> = ({username,
                                               email,
                                               message}) => {
  return (
    <FeedbackItemStyle>
      <h1 className={styles}>username: {username}</h1>
      <h1 className={styles}>email: {email}</h1>
      <h1 className={styles}>message: {message}</h1>
    </FeedbackItemStyle>
  );
};

export default FeedbackItem;
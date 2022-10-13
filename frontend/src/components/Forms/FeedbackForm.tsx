import React from 'react';
import {InputField, FormButton, MessageField} from "../../utils/styled-components";
import styles from './index.module.scss'
import {useForm } from "react-hook-form";
import {FeedbackParams} from "../../utils/types";
import { postCreateFeedback } from '../../utils/api';

const FeedbackForm = () => {
    const {register, handleSubmit, formState:{errors} ,resetField} = useForm<FeedbackParams>()

    const onSubmit = async (data:FeedbackParams) => {
        try {
            postCreateFeedback(data)
            alert("thanks for your feedback")
            resetField('email')
            resetField('username')
            resetField('message')
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <form className={styles} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles}>Reach out to us!</h1>
            <InputField placeholder="Your name*" height={93}
                        type="text" id="name" {...register('username', {required:true})}/>
            <InputField placeholder="Your email*" height={93}
                        type="email" id="email" {...register('email', {required:true})}/>
            <MessageField placeholder="Your message*"
                          id="message" {...register('message', {required:true})}/>
            <FormButton>Send Message</FormButton>
        </form>
    );
};

export default FeedbackForm;
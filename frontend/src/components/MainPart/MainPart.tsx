import React from 'react';
import {FormSide, PictureSide,MainPartStyle ,FormButton} from "../../utils/styled-components";
import FeedbackForm from "../Forms/FeedbackForm";
import {RedBlob, YellowBlob, YellowEllipse, YellowMidBlob} from "../CircleBlobs/index.";
import img from "../../utils/assets/Mask Group.png";
import styles from "./index.module.scss";
import CloudsBlobs from "../CloudsBlobs";

const MainPart = () => {
    return (
        <MainPartStyle>
            <FormSide>
                <FeedbackForm/>
                <YellowBlob top={23} left={29}/>
            </FormSide>
            <PictureSide>
                <img className={styles.pict} src={img} alt="NewYork"/>
                <YellowMidBlob bottom={485} marginRight={550} zIndex={102}/>
                <RedBlob bottom={272} marginRight={380} zIndex={101}/>
                <YellowEllipse top={21} marginRight={639}/>
            </PictureSide>
            <CloudsBlobs/>
        </MainPartStyle>
    );
};

export default MainPart;
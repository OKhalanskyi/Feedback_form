import React from 'react';
import {GreenBlob, RedBlob, YellowBlob} from "../CircleBlobs/index.";
import {FooterStyle} from "../../utils/styled-components";
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";

const Footer = () => {
    return (
        <FooterStyle>
            <RedBlob left={15} bottom={-60}/>
            <YellowBlob bottom={28} right={-38}/>
            <GreenBlob bottom={103} right={128}/>
            <SocialMediaBar/>
        </FooterStyle>
    );
};

export default Footer;
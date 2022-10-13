import React from 'react';
import {Link} from "react-router-dom";
import styles from "./index.module.scss"
import facebook from '../../utils/assets/Facebook.png'
import instagram from '../../utils/assets/Instagram.png'
import pinterest from '../../utils/assets/Pinterest.png'
import twitter from '../../utils/assets/Twitter.png'
import SocialMediaIcon from "./SocialMediaIcon";


const SocialMediaBar = () => {
    return (
        <div className={styles.mediaBar}>
            <SocialMediaIcon img={instagram} path={"https://www.instagram.com"}/>
            <SocialMediaIcon img={twitter} path={"https://www.twitter.com"}/>
            <SocialMediaIcon img={facebook} path={"https://www.facebook.com"}/>
            <SocialMediaIcon img={pinterest} path={"https://www.pinterest.com"}/>
            <Link className={styles.link} to={'feedbacks'}>check all</Link>
        </div>

);
};

export default SocialMediaBar;
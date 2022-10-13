import React from 'react';
import {IconProps} from "../../utils/types";


const SocialMediaIcon:React.FC<IconProps> = ({path,img}) => {
    return (
        <a href={path}>
            <span>
                <img src={img} alt={img}/>
            </span>
        </a>
    );
};

export default SocialMediaIcon;
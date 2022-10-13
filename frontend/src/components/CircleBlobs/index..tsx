import React from 'react';
import {BlobProps} from "../../utils/types";

const YellowBlob:React.FC<BlobProps> = ({top,
                                        bottom,
                                        left,
                                        right,
                                        zIndex
                                    }) => {
    return (
        <svg style={{position:"absolute",
                    top:top,
                    bottom:bottom,
                    left:left,
                    right:right,
                    zIndex:zIndex}}
             width="122" height="122" viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path d="M85.6544 95.4833C105.586 81.4273 110.668 54.3283 97.0059 34.9559C83.344 15.5835 56.1114 11.2738 36.1802 25.3298C16.249 39.3859 11.1668 66.4849 24.8287 85.8573C38.4906 105.23 65.7232 109.539 85.6544 95.4833Z" fill="#FAD34F"/>
                <path d="M57.1683 40.788C58.0918 42.0975 56.639 42.2187 55.2917 43.1688C53.9444 44.119 53.2143 45.5408 52.2891 44.2289C51.3639 42.917 51.7092 41.0874 53.0565 40.1372C54.4021 39.1847 56.2431 39.4761 57.1683 40.788Z" fill="white"/>
                <path d="M66.4913 34.2131C67.4148 35.5226 65.962 35.6438 64.6147 36.594C63.2674 37.5441 62.5373 38.9659 61.6121 37.654C60.6869 36.3422 61.0322 34.5125 62.3795 33.5624C63.7251 32.6099 65.5661 32.9012 66.4913 34.2131Z" fill="white"/>
                <path d="M68.467 41.9342C70.2711 44.4925 69.5999 48.0717 66.9678 49.9279C64.3358 51.7841 60.7389 51.2149 58.9348 48.6566C57.1306 46.0983 61.1942 47.3293 63.8262 45.4731C66.4583 43.6169 66.6628 39.376 68.467 41.9342Z" fill="white"/>
            </g>
        </svg>
    );
};

const YellowMidBlob:React.FC<BlobProps> = ({top,
                                           bottom,
                                           left,
                                           right,
                                           zIndex,
                                            marginRight
                                       }) => {
    return (
        <svg style={{position:"absolute",
                    marginRight:marginRight,
                    top:top,
                    bottom:bottom,
                    left:left,
                    right:right,
                    zIndex:zIndex}}
             width="127" height="127" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path d="M63.7073 126.932C98.7774 126.932 127.207 98.5023 127.207 63.4323C127.207 28.3622 98.7774 -0.0677452 63.7073 -0.0677452C28.6372 -0.0677452 0.207314 28.3622 0.207314 63.4323C0.207314 98.5023 28.6372 126.932 63.7073 126.932Z" fill="#FAD34F"/>
                <path d="M80.8142 83.1596C80.8142 87.7062 77.127 83.1596 72.5762 83.1596C68.0296 83.1596 64.3381 87.7062 64.3381 83.1596C64.3381 78.613 68.0253 74.9215 72.5762 74.9215C77.127 74.9215 80.8142 78.6087 80.8142 83.1596Z" fill="white"/>
                <path d="M106.752 83.1596C106.752 87.7062 103.065 83.1596 98.5138 83.1596C93.9672 83.1596 90.2758 87.7062 90.2758 83.1596C90.2758 78.613 93.963 74.9215 98.5138 74.9215C103.065 74.9215 106.752 78.6087 106.752 83.1596Z" fill="white"/>
                <path d="M98.4969 100.614C98.4969 108.979 91.7151 115.756 83.3543 115.756C74.9935 115.756 68.2117 108.974 68.2117 100.614C68.2117 92.2528 74.9935 101.198 83.3543 101.198C91.7151 101.198 98.4969 92.2528 98.4969 100.614Z" fill="white"/>
            </g>
        </svg>
    );
};

const RedBlob:React.FC<BlobProps> = ({top,
                                     bottom,
                                     left,
                                     right,
                                     zIndex,
                                     marginRight
                          }) => {
    return (
        <svg style={{position:"absolute",
            marginRight:marginRight,
            top:top,
            bottom:bottom,
            left:left,
            right:right,
            zIndex:zIndex}} width="299" height="298" viewBox="0 0 299 298" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path d="M218.884 225.942C175.22 265.761 108.448 263.637 69.7446 221.198C31.0414 178.758 35.0629 112.073 78.727 72.2535C122.391 32.4338 189.163 34.5579 227.866 76.9977C266.569 119.438 262.548 186.122 218.884 225.942Z" fill="#F472B7"/>
                <path d="M104.344 129.984C106.96 132.853 108.005 129.478 110.957 126.787C113.909 124.095 117.654 123.11 115.033 120.236C112.412 117.362 107.903 117.223 104.951 119.915C101.995 122.602 101.723 127.11 104.344 129.984Z" fill="white"/>
                <path d="M83.9193 148.61C86.5356 151.479 87.5808 148.105 90.5324 145.413C93.484 142.721 97.2293 141.736 94.6084 138.862C91.9874 135.988 87.4781 135.85 84.5265 138.541C81.5703 141.228 81.2984 145.736 83.9193 148.61Z" fill="white"/>
                <path d="M101.157 157.316C106.268 162.92 115.087 163.201 120.853 157.942C126.619 152.684 127.15 143.876 122.039 138.272C116.928 132.667 117.719 142.925 111.953 148.183C106.187 153.442 96.0457 151.711 101.157 157.316Z" fill="white"/>
            </g>
        </svg>
    );
};
const GreenBlob:React.FC<BlobProps> = ({top,
                                       bottom,
                                       left,
                                       right,
                                       zIndex,
                                       marginRight
                                   }) => {
    return (
        <svg style={{position:"absolute",
            marginRight:marginRight,
            top:top,
            bottom:bottom,
            left:left,
            right:right,
            zIndex:zIndex}}
             width="79" height="97" viewBox="0 0 79 97" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M78.465 57.7675C78.465 79.435 60.9 97 39.2325 97C17.565 97 0 79.435 0 57.7675V0H78.465V57.7675Z" fill="#46EBB0"/>
            <path d="M38.0118 69.05C38.0118 66.241 40.2899 69.05 43.1016 69.05C45.9106 69.05 48.1913 66.241 48.1913 69.05C48.1913 71.8591 45.9132 74.1398 43.1016 74.1398C40.2899 74.1398 38.0118 71.8617 38.0118 69.05Z" fill="white"/>
            <path d="M21.9868 69.05C21.9868 66.241 24.2649 69.05 27.0766 69.05C29.8856 69.05 32.1663 66.241 32.1663 69.05C32.1663 71.8591 29.8882 74.1398 27.0766 74.1398C24.2649 74.1398 21.9868 71.8617 21.9868 69.05Z" fill="white"/>
            <path d="M27.0872 58.2664C27.0872 53.0982 31.2772 48.9108 36.4428 48.9108C41.6084 48.9108 45.7985 53.1008 45.7985 58.2664C45.7985 63.4321 41.6084 57.9055 36.4428 57.9055C31.2772 57.9055 27.0872 63.4321 27.0872 58.2664Z" fill="white"/>
        </svg>
    );
};

const YellowEllipse:React.FC<BlobProps> = ({top,
                                            bottom,
                                            left,
                                            right,
                                            zIndex,
                                            marginRight
                                        })=>{
    return (
        <svg style={{position:"absolute",
            marginRight:marginRight,
            top:top,
            bottom:bottom,
            left:left,
            right:right,
            zIndex:zIndex}} width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.1" cx="43.5" cy="43.5" r="43.5" fill="#FAD34F"/>
        </svg>
    )
}

export {YellowBlob , YellowMidBlob, RedBlob, GreenBlob , YellowEllipse};

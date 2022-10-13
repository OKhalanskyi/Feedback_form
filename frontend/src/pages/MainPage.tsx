import React from 'react';
import { Wrapper} from "../utils/styled-components";
import Footer from "../components/Footer/Footer";
import MainPart from "../components/MainPart/MainPart";

const MainPage = () => {
    return (
        <Wrapper>
            <MainPart/>
            <Footer/>
        </Wrapper>
    );
};

export default MainPage;
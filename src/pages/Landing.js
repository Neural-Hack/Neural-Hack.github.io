import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Palette } from '../assets/Colors';
import { motion } from 'framer-motion';

const TitleContainer = styled.div`

    background-color: ${Palette.bg};
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
    display: flex;

    @media screen and (max-width: 430px) {
        padding: 5% 25%;
        flex-direction: column;
        height: 50vh;
    };
`;

const TitleText = styled.ul`
    margin: 0;
    padding: 0;
    float: left;
    margin-right: 15%;
`;

const MainTitle = styled.li`
    color: ${Palette.st};
    letter-spacing: 4px;
    font-size: 48px;
    display: block;
    font-family: 'Montserrat', sans-serif;
`;

const SubTitle = styled.li`
    color: ${Palette.st};
    font-size: 30px;
    letter-spacing: -.8px;
    display: block;
    font-family: 'Roboto', sans-serif;
`;

const LandingBtn = styled.button`
    font-family: 'Montserrat', sans-serif;
    letter-spacing: -.6px;
    transition-duration: 0.35s;
    background-color: ${Palette.bg};
    color: ${Palette.st};
    margin-left: 15%;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 64px;
    padding-right: 64px;
    border-style: solid;
    border-radius: 1px;
    border-color: ${Palette.st};
    cursor: pointer; 

    @media screen and (max-width: 430px) {
        margin-left: 0;
        margin-top: 50%;
        justify-self: center;
    };

    &:hover {
        background-color: ${Palette.st};
        color: ${Palette.bg};
        transition-duration: 0.35s;
    }
`;

function Landing() {
    const navigate = useNavigate();

    const routeChange = () => {
        let path = `/about`;
        navigate(path, { state: { fromLandingPage: true } });
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: '100vh' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: '-100vh' }}
            transition={{ duration: 1 }}
        >
            <TitleContainer>
                <TitleText>
                    <MainTitle>
                        NEURAL HACK
                    </MainTitle>
                    <SubTitle>
                        SPRING 2024
                    </SubTitle>
                </TitleText>
                <LandingBtn onClick={routeChange}>
                    Explore
                </LandingBtn>
            </TitleContainer>
        </motion.div>
    )
}

export default Landing
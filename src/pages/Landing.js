import React from 'react'
import { useNavigate } from 'react-router-dom'
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

    @media screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: space-around;
    }
`;

const TitleText = styled.ul`
    margin: 0;
    padding: 0;
    float: left;
    margin-right: 15%;

    @media screen and (max-width: 900px) {
        float: center;
        display: flex;
        flex-direction: column;
        margin-right: 0%;
        align-items: center;
        text-align: center;
    }
`;

const MainTitle = styled.li`
    color: ${Palette.st};
    letter-spacing: 4px;
    font-size: 48px;
    display: block;
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 900px) {
        font-size: 44px;
    }

    @media screen and (max-width: 375px) {
        font-size: 28px;
    }
`;

const SubTitle = styled.li`
    color: ${Palette.st};
    font-size: 30px;
    letter-spacing: -.8px;
    display: block;
    font-family: 'Roboto', sans-serif;

    @media screen and (max-width: 900px) {
        font-size: 26px;
    }

    @media screen and (max-width: 375px) {
        font-size: 18px;
    }
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

    @media screen and (max-width: 960px) {
        margin-left: 0%;
        justify-self: center;
        align-self: center;
    }

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
                    Learn
                </LandingBtn>
            </TitleContainer>
        </motion.div>
    )
}

export default Landing
import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import { Palette } from '../assets/Colors';
import { useLocation, useNavigate } from 'react-router-dom';

/*
Interested?
I am currently enrolled at Fullerton College!

I am not enrolled but I would love to contribute!

*/

const Container = styled.div`
    background-color: ${Palette.fg};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContributeTitle = styled.div`
    text-align: left;
    color: ${Palette.mt};
    width: 50%;
    word-wrap: break-word;
    margin-top: 60px;
    margin-bottom: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: 800;
    font-size: 42px;
    letter-spacing: -.8px;
`;

const ContributeSubTitle = styled.div`
    text-align: left;
    color: ${Palette.st};
    width: 50%;
    word-wrap: break-word;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 30px;
`;

const ContributeBody = styled.p`
    text-align: left;
    color: ${Palette.mt};
    width: 50%;
    word-wrap: break-word;
    font-family: 'Playfair Display', serif;
    font-weight: 500;
    font-size: 24px;
`;

const Contribute = () => {
    const navigate = useNavigate();

    const routeChange = (path) => {
        navigate(path);
    }

    return (
        <div>
            <Navbar />
            <Container>
                <ContributeTitle>
                    Interested?
                </ContributeTitle>
                <ContributeSubTitle>
                    I am currently enrolled at Fullerton College.
                </ContributeSubTitle>
                <ContributeBody>
                    If you are currently enrolled at Fullerton College for Spring 2024 feel free to contact us at our <a href="mailto:neuralhackfc@gmail.com">email</a>.
                </ContributeBody>
            </Container>
        </div>
    )
}

export default Contribute
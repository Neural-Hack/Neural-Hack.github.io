import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import { Palette } from '../assets/Colors';
import { useNavigate } from 'react-router-dom';

/*
Interested?
I am currently enrolled at Fullerton College!

I am not enrolled but I would love to contribute!

*/

const Container = styled.div`
    background-color: ${Palette.fg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContributeContainer = styled.div`
    background-color: ${Palette.fg};
    width: 50%;
    @media screen and (max-width: 960px) {
        width: 70%;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
`;

const ContributeTitle = styled.div`
    text-align: left;
    color: ${Palette.mt};
    word-wrap: break-word;
    margin-top: 60px;
    margin-bottom: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: 800;
    font-size: 42px;
    letter-spacing: -.8px;

    @media screen and (max-width: 960px) {
        font-size: 30px;
    }
`;

const ContributeSubTitle = styled.div`
    text-align: left;
    color: ${Palette.st};
    word-wrap: break-word;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 30px;

    @media screen and (max-width: 960px) {
        font-size: 20px;
    }
`;

const ContributeBody = styled.p`
    text-align: left;
    color: ${Palette.mt};
    word-wrap: break-word;
    font-family: 'Ropa Sans', sans-serif;
    font-weight: 400;
    font-size: 24px;

    @media screen and (max-width: 960px) {
        font-size: 18px;
    }
`;

const FormBtn = styled.button`
    font-family: 'Montserrat', sans-serif;
    letter-spacing: -.6px;
    transition-duration: 0.35s;
    background-color: ${Palette.fg};
    color: ${Palette.mt};
    margin-top: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 20px;
    padding-right: 20px;
    border-style: solid;
    border-radius: 1px;
    border-color: ${Palette.st};
    cursor: pointer; 
    width: 15%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;

    &:hover {
        background-color: ${Palette.st};
        color: ${Palette.fg};
        transition-duration: 0.35s;
    }

    @media screen and (max-width: 1280px) {
        width: 25%;
    }
`

const Contribute = () => {
    const navigate = useNavigate();

    const routeChange = (path) => {
        navigate(path);
    }

    return (
        <div>
            <Navbar />
            <Container>
                <ContributeContainer>
                    <ContributeTitle>
                        Interested?
                    </ContributeTitle>
                    <ContributeSubTitle>
                        I am currently enrolled at Fullerton College.
                    </ContributeSubTitle>
                    <ContributeBody>
                        If you are currently enrolled at Fullerton College for Spring 2024 please fill out this brief form.
                        Keep in mind we cater to any level of experience but we value motivation and interest as the workload may be rigorous.
                    </ContributeBody>

                    <FormBtn onClick={() => routeChange('/join')}>
                        Apply
                    </FormBtn>

                    <ContributeSubTitle>
                        I am not enrolled but still interested.
                    </ContributeSubTitle>
                    <ContributeBody>
                        a
                    </ContributeBody>
                </ContributeContainer>
            </Container>
        </div>
    )
}

export default Contribute
import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import { Palette } from '../assets/Colors';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Footer from './Footer';

/*
Interested?
I am currently enrolled at Fullerton College!

I am not enrolled but I would love to contribute!

*/

const Container = styled.div`
    background-color: ${Palette.bg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContributeContainer = styled.div`
    background-color: ${Palette.bg};
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
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 42px;
    letter-spacing: -.8px;

    @media screen and (max-width: 960px) {
        font-size: 30px;
    }

    @media screen and (max-width: 350px) {
        font-size: 24px;
    }
`;

const ContributeSubTitle = styled.div`
    text-align: left;
    color: ${Palette.st};
    word-wrap: break-word;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 30px;

    @media screen and (max-width: 960px) {
        font-size: 20px;
    }

    @media screen and (max-width: 350px) {
        font-size: 16px;
    }
`;

const ContributeBody = styled.p`
    text-align: left;
    color: ${Palette.mt};
    word-wrap: break-word;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 24px;
    border-left: 2px solid ${Palette.mt};
    padding-left: 14px;

    @media screen and (max-width: 960px) {
        font-size: 18px;
    }

    @media screen and (max-width: 350px) {
        font-size: 14px;
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
        width: 40%;
    }
`;

const ContactDiv = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    margin-bottom: 290px;
    max-width: 600px;
    width: 100%;

    @media screen and (max-width: 960px) {
        font-size: 18px;
        width: 70%;
    }
`;

const ContactGit = styled(Link)`
    color: ${Palette.mt};
    font-size: 3rem;

    @media screen and (max-width: 350px) {
        font-size: 2rem;
    }
`;

const ContactLink = styled.a`
    color: ${Palette.mt};
    font-size: 3rem;

    @media screen and (max-width: 350px) {
        font-size: 2rem;
    }
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
                <ContributeContainer>
                    <ContributeTitle>
                        Interested?
                    </ContributeTitle>
                    <ContributeSubTitle>
                        Currently enrolled at Fullerton College?
                    </ContributeSubTitle>
                    <ContributeBody>
                        Please fill out this brief form.
                        Keep in mind we cater to any level of experience but we value persistance and interest as the workload may be rigorous.
                    </ContributeBody>
                    <FormBtn onClick={() => routeChange('/join')}>
                        Apply
                    </FormBtn>
                    <ContributeSubTitle>
                        I am not enrolled but still interested.
                    </ContributeSubTitle>
                    <ContributeBody>
                        Don't worry! You can still contribute to our public Git repository or contact us through our email for any other inquires.
                    </ContributeBody>
                    <ContributeTitle>
                        Contact Us
                    </ContributeTitle>
                    <ContributeSubTitle>
                        You can reach us through Github or email.
                    </ContributeSubTitle>
                </ContributeContainer>
                <ContactDiv>
                    <ContactGit to="https://github.com/Neural-Hack">
                        <FaGithub />
                    </ContactGit>
                    <ContactLink href="mailto:neuralhackfc@gmail.com">
                        <AiOutlineMail />
                    </ContactLink>
                </ContactDiv>
            </Container>
            <Footer />
        </div>
    )
}

export default Contribute
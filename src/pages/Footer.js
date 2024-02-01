import React from 'react'
import styled from 'styled-components';
import { Palette } from '../assets/Colors'
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const FooterContainer = styled.footer`
    background-color: ${Palette.bg};
    text-align: center;
    position: relative;
    bottom: 0;
    width: 100%;
`;

const FooterText = styled.p`
    margin: 0;
    padding: 0;
    font-size: 16px;
    color: ${Palette.mt};
    margin-top: 7px;
    margin-bottom: 20px;
    font-family: 'Montserrat', sans-serif;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const NavLogo = styled(Link)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: left;
    font-weight: bold;
    text-decoration: none;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 450px) {
        margin-left: 10px;
    }
`

const MainTitle = styled.li`
    color: ${Palette.mt};
    letter-spacing: 2px;
    font-size: 24px;
    display: block;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    margin-bottom: -5px;
    margin-top: -5px;

    @media screen and (max-width: 450px) {
        font-size: 18px;
        margin-bottom: -3px;
        margin-top: -3px;
    }
`;

const ContactGit = styled(Link)`
    color: ${Palette.mt};
    font-size: 3rem;
    margin-right: 10px;

    @media screen and (max-width: 350px) {
        font-size: 2rem;
    }
`;

const ContactLink = styled.a`
    color: ${Palette.mt};
    font-size: 3rem;
    margin-left: 10px;

    @media screen and (max-width: 350px) {
        font-size: 2rem;
    }
`;

const Footer = () => {

    return (
        <div>
            <FooterContainer>
                <NavLogo to='/home'>
                    <MainTitle>
                        NEURAL
                    </MainTitle>
                    <MainTitle>
                        HACK
                    </MainTitle>
                </NavLogo>
                <LogoContainer>
                    <ContactGit>
                        <FaGithub />
                    </ContactGit>
                    <ContactLink>
                        <AiOutlineMail />
                    </ContactLink>
                </LogoContainer>
                <FooterText>
                    ©2024 NeuralHack
                </FooterText>
            </FooterContainer>
        </div>
    )
}

export default Footer
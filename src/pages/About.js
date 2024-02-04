import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components';
import { Palette } from '../assets/Colors';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const FEmpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: ${Palette.bg};
  background-color: ${Palette.mt};
`;

const FEmpLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  margin-bottom: 10%;
`

const FEmpLogoTitle = styled.div`
  //color: ${Palette.mt};
  color: ${Palette.bg};
  letter-spacing: 2px;
  font-size: 44px;
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin-bottom: -5px;
  margin-top: -5px;

  @media screen and (max-width: 350px) {
    font-size: 32px;
  }
`;

const FEmpLogoSubTitle = styled.div`
  //color: ${Palette.mt};
  color: ${Palette.bg};
  font-size: 22px;
  letter-spacing: -.8px;
  margin-top: 20px;
  display: block;
  font-family: 'Roboto', sans-serif;

  @media screen and (max-width: 350px) {
    font-size: 18px;
  }
`;

const FEmpLearnBtn = styled.button`
  font-family: 'Montserrat', sans-serif;
    letter-spacing: -.6px;
    transition-duration: 0.35s;
    //background-color: ${Palette.bg};
    background-color: ${Palette.mt};
    color: ${Palette.bg};
    //color: ${Palette.mt};
    margin-top: 20px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 64px;
    padding-right: 64px;
    border-style: solid;
    border-radius: 1px;
    border-color: ${Palette.bg};
    //border-color: ${Palette.st};
    cursor: pointer; 

    &:hover {
      color: ${Palette.mt};
      background-color: ${Palette.bg};
      //background-color: ${Palette.st};
      //color: ${Palette.bg};
      transition-duration: 0.35s;
    }
`

const Container = styled.div`
  background-color: ${Palette.bg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContainerWho = styled.div`
  max-width: 900px;
  width: 50%;
    @media screen and (max-width: 960px) {
        width: 70%;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  
  padding: 30px;
`;

const WhoTitle = styled.div`
  font-family: 'Ropa Sans', sans-serif;
  font-size: 36px;
  color: ${Palette.mt};
  margin-top: 44px;
  font-weight: 400;

  @media screen and (max-width: 960px) {
    font-size: 28px;
  }
`;

const WhoBody = styled.p`
  font-family: 'Ropa Sans', sans-serif;
  font-size: 24px;
  color: ${Palette.st};
  margin-top: 20px;
  margin-bottom: 100px;
  font-weight: normal;
  white-space: pre-wrap;
  text-align: left;
  word-wrap: break-word;
  border-left: 2px solid ${Palette.mt};
  padding-left: 14px;

  @media screen and (max-width: 960px) {
    font-size: 20px;
    width: 75%;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 350px) {
    font-size: 14px;
    width: 95%;
  }
`;

const WhoBtn = styled.button`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -.6px;
  transition-duration: 0.35s;
  //background-color: ${Palette.fg};
  background-color: ${Palette.bg};
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
    //color: ${Palette.fg};
    color: ${Palette.bg};
    transition-duration: 0.35s;
  }

  @media screen and (max-width: 1280px) {
    width: 40%;
  }
`;

function About() {
  const location = useLocation();
  const fromLandingPage = location.state && location.state.fromLandingPage;

  const navigate = useNavigate();

  const routeChange = (path) => {
    navigate(path);
  }

  return (
    <motion.div
      initial={fromLandingPage ? { opacity: 0, y: '100vh' } : { opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <Navbar />
      <FEmpContainer>
        <FEmpLogoContainer>
          <FEmpLogoTitle>
            NEURAL HACK
          </FEmpLogoTitle>
          <FEmpLogoSubTitle>
            SPRING 2024
          </FEmpLogoSubTitle>
          <FEmpLearnBtn onClick={() => routeChange('/contribute')}>
            Join Us
          </FEmpLearnBtn>
        </FEmpLogoContainer>
      </FEmpContainer>
      <Container>
        <ContainerWho>
          <WhoTitle>
            Who are we?
          </WhoTitle>
          <WhoBody>
            Neural Hack is an upcoming club at Fullerton College for students who are interested in machine learning and artificial intelligence. Catered to a diverse range of students, our club offers a space for all individuals interested in the world of data science.
          </WhoBody>
          <WhoTitle>
            What is our goal?
          </WhoTitle>
          <WhoBody>
            We cater to a diverse range of students, including those without prior experience in machine learning. Our goal is to introduce students to the vast field of data science through workshops, research, and other activities.        </WhoBody>
          <WhoTitle>
            How can I participate?
          </WhoTitle>
          <WhoBody>
            Any currently enrolled students at Fullerton College are eligible to join regardless of prior experience. If you are not enrolled but are still interested in contributing feel free to email or just participate through Github.        </WhoBody>
          <WhoBtn onClick={() => routeChange('/contribute')}>
            Join Us
          </WhoBtn>
        </ContainerWho>
      </Container>
      <Footer />
    </motion.div>
  )
}

export default About
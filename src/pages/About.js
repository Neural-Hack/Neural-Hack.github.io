import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components';
import { Palette } from '../assets/Colors';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const FEmpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Palette.bg};
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
  color: ${Palette.mt};
  letter-spacing: 2px;
  font-size: 44px;
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
  margin-bottom: -5px;
  margin-top: -5px;
`;

const FEmpLogoSubTitle = styled.div`
  color: ${Palette.mt};
  font-size: 30px;
  letter-spacing: -.8px;
  display: block;
  font-family: 'Roboto', sans-serif;
`;

const FEmpLearnBtn = styled.button`
  font-family: 'Montserrat', sans-serif;
    letter-spacing: -.6px;
    transition-duration: 0.35s;
    background-color: ${Palette.bg};
    color: ${Palette.mt};
    margin-top: 20px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 64px;
    padding-right: 64px;
    border-style: solid;
    border-radius: 1px;
    border-color: ${Palette.st};
    cursor: pointer; 

    &:hover {
        background-color: ${Palette.st};
        color: ${Palette.bg};
        transition-duration: 0.35s;
    }
`

const ContainerWho = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${Palette.fg};
  padding: 30px;
`;

const WhoTitle = styled.div`
  justify-content: center;
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  color: ${Palette.mt};
  margin-top: 44px;
  font-weight: bold;
`;

const WhoBody = styled.p`
  justify-content: center;
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  color: ${Palette.st};
  margin-top: 20px;
  font-weight: normal;
  white-space: pre-wrap;
  text-align: center;
  word-wrap: break-word;
  width: 50%;
`;

const WhoBtn = styled.button`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -.6px;
  transition-duration: 0.35s;
  background-color: ${Palette.fg};
  color: ${Palette.mt};
  margin-top: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 64px;
  padding-right: 64px;
  border-style: solid;
  border-radius: 1px;
  border-color: ${Palette.st};
  cursor: pointer; 

  &:hover {
    background-color: ${Palette.st};
    color: ${Palette.fg};
    transition-duration: 0.35s;
  }
`

function About() {
  const location = useLocation();
  const fromLandingPage = location.state && location.state.fromLandingPage;

  const navigate = useNavigate();

  const routeChange = (path) =>{ 
    navigate(path);
  }

  return (
    <motion.div
      initial={fromLandingPage ? { opacity: 0, y: '100vh'  } : { opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <Navbar/>
      <FEmpContainer>
        <FEmpLogoContainer>
          <FEmpLogoTitle>
            NEURAL HACK
          </FEmpLogoTitle>
          <FEmpLogoSubTitle>
            SPRING 2024
          </FEmpLogoSubTitle>
          <FEmpLearnBtn onClick={() => routeChange('/contribute')}>
            Join
          </FEmpLearnBtn>
        </FEmpLogoContainer>
      </FEmpContainer>
      <ContainerWho>
        <WhoTitle>
          Who are we?
        </WhoTitle>
        <WhoBody>
          Neural Hack is an upcoming club for Fullerton College students who are interested in machine learning and aritificial intelligence. 
        </WhoBody>
        <WhoTitle>
          What is our goal?
        </WhoTitle>
        <WhoBody>
          Our aim is to cater to a diverse range of students, including those without prior experince in machine learning and as well as those who are already experienced.
        </WhoBody>
        <WhoTitle>
          How do I join?
        </WhoTitle>
        <WhoBody>
          Any currently enrolled students at Fullerton College are eligible to officially join. If you are not enrolled but you are still interested in contributing feel free!
        </WhoBody>
        <WhoBtn onClick={() => routeChange('/contribute')}>
          Join
        </WhoBtn>
      </ContainerWho>
    </motion.div>
  )
}

export default About
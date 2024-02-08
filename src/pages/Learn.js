import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styled from 'styled-components'
import { Palette } from '../assets/Colors';
import { FaWindows, FaLinux, FaApple } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";

const LPageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  left: 0;
  background-color: ${Palette.mt};
  max-width: 330px;
`;

const LeftNavSection = styled.div`
  display: block;
  background-color: red;
`;

const LeftNavTitle = styled.div`
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: ${Palette.mt};
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: normal;
`;

const LeftNavItem = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 20px;
  padding-right: 16px;
  color: ${Palette.mt};
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: bold;
`;

const LeftSubItem = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;
  color: ${Palette.mt};
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
`;

const LearnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: ${Palette.bg};
`;

const LearnTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  color: ${Palette.mt};
`;

const LearnCompatibleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding-top: 15px;
  padding-bottom: 20px;
`;

const LearnCompatibleItem = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: ${Palette.mt};
  font-size: 16px;
  border-width: 2px;
  border-color: ${Palette.mt};
  border-style: solid;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 15px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
  padding-bottom: 2px;
`;

const LearnBody = styled.a`
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  color: ${Palette.mt};
`;

const Learn = () => {
  return (
    <>
      <Navbar />
      <LPageContainer>
      <LeftNavContainer>
        <LeftNavSection>
          <LeftNavTitle>
            GETTING STARTED
          </LeftNavTitle>
          <LeftNavItem>
            Setting Up The Environment
          </LeftNavItem>
        </LeftNavSection>
      </LeftNavContainer>
      <LearnContainer>
        <LearnTitle>
          Getting Started
        </LearnTitle>
        <LearnCompatibleContainer>
          <LearnCompatibleItem>
            <FaWindows/> Windows
          </LearnCompatibleItem>
          <LearnCompatibleItem>
            <FcLinux/> Linux
          </LearnCompatibleItem>
          <LearnCompatibleItem>
            <FaApple/> macOS
          </LearnCompatibleItem>
        </LearnCompatibleContainer>
        <LearnBody>
          yaypayapyap
        </LearnBody>
      </LearnContainer>
      </LPageContainer>
      <Footer />
    </>
  )
}

export default Learn
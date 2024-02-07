import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styled from 'styled-components'
import { Palette } from '../assets/Colors';

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
  color: ${Palette.mt};
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: bold;
`;

const LeftSubItem = styled.div`

`;

const Learn = () => {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  )
}

export default Learn
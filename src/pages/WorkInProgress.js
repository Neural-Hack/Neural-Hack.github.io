import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import { Palette } from '../assets/Colors';
import { PiRobot } from "react-icons/pi";
import Footer from './Footer';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${Palette.fg};
`;

const WorkIcon = styled.div`
    color: ${Palette.mt};
    font-size: 120px;

    @media screen and (max-width: 960px) {
        font-size: 100px;
    }
`;

const WorkText = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: ${Palette.st};
  font-size: 60px;

  @media screen and (max-width: 960px) {
        font-size: 32px;
    }

    @media screen and (max-width: 350px) {
    font-size: 24px;
  }
`;

const WorkInProgress = () => {
  return (
    <>
        <Navbar/>
        <Container>
            <WorkIcon>
                <PiRobot/>
            </WorkIcon>
            <WorkText>
                Sorry! <br/>
                We are working on this.
            </WorkText>
        </Container>
        <Footer/>
    </>
  )
}

export default WorkInProgress
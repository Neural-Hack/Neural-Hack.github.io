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
    max-width: 200px;
`;


const Learn = () => {
  return (
    <>
    <Navbar/>
    <LeftNavContainer>
        asd
    </LeftNavContainer>
    <Footer/>
    </>
  )
}

export default Learn
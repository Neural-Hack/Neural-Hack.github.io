import React from 'react'
import { TbError404 } from "react-icons/tb";
import styled from 'styled-components'
import { Palette } from '../assets/Colors';
import Navbar from './Navbar';

const ErrorContainer = styled.div`
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${Palette.fg}
`;

const FourOFour = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Palette.mt};
    font-size: 12rem;
`;

const PageNotFound = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  color: ${Palette.st};
  font-size: 60px;
`;

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <ErrorContainer>
        <FourOFour>
          <TbError404 />
        </FourOFour>
        <PageNotFound>
          PAGE NOT FOUND
        </PageNotFound>
      </ErrorContainer>
    </div>
  )
}

export default NotFound
import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components';
import { Palette } from '../assets/Colors';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const ContainerWho = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Palette.mt};
`;

const About = () => {
  const location = useLocation();
  const fromLandingPage = location.state && location.state.fromLandingPage;
  console.log(fromLandingPage);

  return (
    <motion.div
      initial={fromLandingPage ? { opacity: 0, y: '100vh'  } : { opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <Navbar/>
      <ContainerWho>
        Who are we?
      </ContainerWho>
    </motion.div>
  )
}

export default About
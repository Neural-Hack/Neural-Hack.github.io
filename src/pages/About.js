import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components';
import { Palette } from '../assets/Colors';
import { motion } from 'framer-motion';

const ContainerWho = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Palette.mt};
`;

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: '100vh'  }}
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
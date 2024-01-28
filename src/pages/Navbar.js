import React from 'react'
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { Palette } from '../assets/Colors';

const Nav = styled.nav`
    background: ${Palette.bg};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

const NavLogo = styled(LinkR)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: pointer;
    display: flex;
    align-items: left;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    flex-direction: column;
`

const MainTitle = styled.li`
    color: ${Palette.st};
    letter-spacing: 2px;
    font-size: 24px;
    display: block;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
`;

const SubTitle = styled.li`
    color: ${Palette.st};
    font-size: 15px;
    letter-spacing: -.6px;
    display: block;
    font-family: 'Roboto', sans-serif;
`;

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
`;

const NavItem = styled.li`
    height: 80px;
`;

const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

function Navbar() {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/home'>
                    <MainTitle>
                        NEURAL
                    </MainTitle>
                    <MainTitle>
                        HACK
                    </MainTitle>
                    <SubTitle>
                        SPRING 2024
                    </SubTitle>
                </NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="learn">
                            Learn
                        </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar
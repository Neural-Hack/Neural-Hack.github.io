import React from 'react'
import styled from 'styled-components'
import { Link as LinkR, useLocation } from 'react-router-dom'
import { Palette } from '../assets/Colors';

const Nav = styled.nav`
    background: ${Palette.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    height: 80px;

    @media screen and (max-width: 450px) {
        padding: 0px 10px;
        height: 60px;
    }
`;

const NavLogo = styled(LinkR)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: left;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    flex-direction: column;

    @media screen and (max-width: 450px) {
        margin-left: 10px;
    }
`

const MainTitle = styled.li`
    color: ${Palette.mt};
    letter-spacing: 2px;
    font-size: 24px;
    display: block;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    margin-bottom: -5px;
    margin-top: -5px;

    @media screen and (max-width: 450px) {
        font-size: 18px;
        margin-bottom: -3px;
        margin-top: -3px;
    }
`;

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 450px) {
        margin: 0px;
        padding: 0px;
    }
`;

const NavItem = styled.li`
    height: 80px;
`;

const NavLinks = styled(LinkR)`
    color: ${Palette.mt};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    cursor: pointer;

    &.active {
        transition-duration: 150ms;
        border-top: 3px solid ${Palette.mt};
    }

    &:hover {
        color: ${Palette.mt};
        margin-top: -4px;
    }

    @media screen and (max-width: 450px) {
        font-size: 12px;
        padding: 0 9px;
    }

    @media screen and (max-width: 300px) {
        font-size: 10px;
        padding: 0 9px;
    }

    transition-duration: 150ms;
`;

function Navbar() {
    const NavRouter = ({ to, children }) => {
        const location = useLocation();
        const isActive = location.pathname === to;

        return (
            <NavLinks to={to} className={isActive ? 'active' : ''}>
                {children}
            </NavLinks>
        );
    }


    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/about'>
                        <MainTitle>
                            NEURAL
                        </MainTitle>
                        <MainTitle>
                            HACK
                        </MainTitle>
                    </NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavRouter to="/about">
                                About
                            </NavRouter>
                        </NavItem>
                        <NavItem>
                            <NavRouter to="/learn">
                                Learn
                            </NavRouter>
                        </NavItem>
                        <NavItem>
                            <NavRouter to="/contribute">
                                Contribute
                            </NavRouter>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
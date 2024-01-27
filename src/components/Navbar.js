import React from 'react'
import {Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks } from './NavbarElements'

function Navbar() {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    NEURAL HACK
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
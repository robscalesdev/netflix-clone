import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLink
} from './NavbarElements'
import { IconContext } from 'react-icons/lib'
import { APP_SHORT_NAME } from '../../../App/constants'

const Navbar = ({ toggleSidebar }) => {

  return (
    <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        {APP_SHORT_NAME}
                    </NavLogo>
                    <MobileIcon onClick={toggleSidebar}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="about">About</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar
import React from 'react'
import { 
    Nav, 
    NavLogo, 
    MobileIcon, 
    UserImg
} from './NavbarElements'
import { IconContext } from 'react-icons/lib'
import { APP_SHORT_NAME } from '../../../App/constants'

const Navbar = () => {

  return (
    <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavLogo to='/'>
                    {APP_SHORT_NAME}
                </NavLogo>
                <MobileIcon>
                    <UserImg src={'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'} alt='user' />
                </MobileIcon>
            </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: #252525;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 0.5rem 2%;


    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

    @media screen and (max-height: 700px) {
        height: 3rem;
    }
`

export const NavLogo = styled(Link)`
    color: #f33;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 3rem;
    font-family: 'Notable', sans-serif;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 600px) {
        font-size: 2.2rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1.8rem;
    }

    @media screen and (max-height: 700px) {
        font-size: 2.2rem;
    }
`

export const MobileIcon = styled.div`
    width: 4rem;
    height: 4rem;

    @media screen and (max-width: 600px) {
        width: 3.3rem;
        height: 3.3rem;
    }

    @media screen and (max-width: 500px) {
        width: 3rem;
        height: 3rem;
    }

    @media screen and (max-height: 700px) {
        width: 3rem;
        height: 3rem;
    }
`

export const UserImg = styled.img`
    width: 100%;
    height: 100%;
`
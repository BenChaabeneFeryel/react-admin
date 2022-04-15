import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll';
import '../../assets/internaute/Navbar.css';
import Connection from './Connection';


const Nav=styled.div`
    /* background-color: darkgreen; */
    background: rgb(119,199,121);
    background: linear-gradient(90deg, rgba(119,199,121,1) 0%, rgba(13,121,9,1) 71%, rgba(33,72,32,1) 100%);
    height : 80px;
    display: flex ;
    justify-content : center ; 
    align-items : center;
    z-index : 1;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

const NavContainer=styled.div`
    display: flex;
    justify-content : space-between;
    height : 80px;
    width: 100% ; 
    padding: 0 20px;
    z-index: 1; 
`

const Logo=styled(Link)`
    color: white;
    display: flex;
    justify-self: flex-start;
    align-items: center;
    margin-left: 100px;
    font-weight: bold;
    font-size: 21px;
    text-decoration: none;
    cursor: pointer;
    
`
const NavMenu=styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    color:white;
    gap: 1rem;
    list-style : none;
    text-align: center;
    margin-right : 120px;
    @media screen and (max-width : 960px){
        display : none;
    }
`

const Item=styled.li`
    
    &:hover {
        opacity: 1.5;
        font-weight: bold;
    };
`

const NavLink=styled(LinkScroll)`
    text-decoration: none;
    color: white;
    display : flex;
    align-items : center;
    text-align: center;
    font-size : 12px;
    padding: 2rem;
    width: 100%;
    height: 100%;
    cursor: pointer;
    &:hover {
        text-decoration : none;
        color: white;
    }
    &.active {
        border-bottom: 4px solid white;
    };
`
const MobileLink=styled(Link)`
    display: none;
    @media screen and (max-width : 960px){
        display: block;
        border-radius: 4px;
        border: 1px solid #fff;
        background-color: transparent;
        color: #fff;
        padding: 10px 18px;
        margin: 2rem auto;
        text-align: center;
        font-size: 1.5rem;
        text-decoration: none;
        transition: all 0.3s ease-out;
        white-space: nowrap;
    }
    &.hover{
        background: #fff;
        color: #242424;
        transition: 250ms;
    }
`

const MenuIcon=styled.div`
    display : none;

    @media screen and (max-width : 960px){
        color: #fff;
        font-size: 1.8rem;
        display: block;
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
        transform: translate(-170%,140%);
    }
`

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const closeMobileMenu = () => setMenu(false);
    const handleMenu = () => setMenu(!menu);
    return (
        <div className="navbar-container">
            <Connection/>
            <Nav>
            
                <NavContainer>
                    <Logo to='/' onClick={closeMobileMenu}>
                        <i class="fa-solid fa-recycle fa-fw"></i>
                        RE:SCHOOL Ecology
                    </Logo>
                    <ul className={menu ? 'navbar-menu active' : 'navbar-menu'}>
                            <Item className='nav-item'>
                                <a href='/' className='nav-link' onClick={closeMobileMenu}>
                                    Accueil
                                </a>
                            </Item>
                            <Item className='nav-item'>
                                <a href='/' className='nav-link' onClick={closeMobileMenu}>
                                    Produits
                                </a>
                            </Item>
                            <Item className='nav-item'>
                                <a href='/' className='nav-link' onClick={closeMobileMenu}>
                                    Mission
                                </a>
                            </Item>
                            <Item className='nav-item'>
                                <a href='/' className='nav-link' onClick={closeMobileMenu}>
                                    Partenaires
                                </a>
                            </Item>
                            <Item className='nav-item'>
                                <a href='/' className='nav-link' onClick={closeMobileMenu}>
                                    A Propos
                                </a>
                            </Item>
                            <Item className='nav-item'>
                                <a href='/' className='nav-link-mobile' onClick={closeMobileMenu} >
                                    Espace Client
                                </a>
                            </Item>
                            <Item>
                                <a href='/' className='nav-link-mobile' onClick={closeMobileMenu} >
                                    Espace Admin
                                </a>
                            </Item>
                        </ul>
                    <MenuIcon onClick={handleMenu}>
                        <i className={menu ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
                    </MenuIcon>
                </NavContainer>
            </Nav>
        </div>
    );
}

export default Navbar;

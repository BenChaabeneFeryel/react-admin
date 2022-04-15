import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Container=styled.div`
    display: grid;
    align-items: center;
    background : darkgreen;
    width : 100%;
    height: 100%;
    top: 0 ;
    left:0;
    z-index:999;
    position :fixed;
    transition : 0.3s ease-in-out;
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
        right:0;
        transform: translate(-100%,50%);
        /* margin-right : 30px;
        margin-top : 20px; */
    }
`
const MobileMenu=styled.div`
    display : flex;
    flex-direction : column;
    gap : 2.5rem;
    justify-content : center;
    align-items: center; 
    font-size: 1.2rem;
`

const MobileLink=styled(Link)``

const Dropdown = () => {
    return (
        <div>
            <Container>
                <MenuIcon>
                    <i className='fa-solid fa-xmark fa-fw'></i>
                </MenuIcon>
                <MobileMenu>
                    <MobileLink to="/">Accueil</MobileLink>
                    <MobileLink to="produits">Produits</MobileLink>
                    <MobileLink to="mission">Mission</MobileLink>
                    <MobileLink to="partenaires">Partenaires</MobileLink>
                    <MobileLink to="apropos">A Propos</MobileLink>
                    <MobileLink to='/'>Espace Client</MobileLink>
                    <MobileLink to='/'>Espace Admin</MobileLink>
                </MobileMenu>
            </Container>
        </div>
    );
}

export default Dropdown;

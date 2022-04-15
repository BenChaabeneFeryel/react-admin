import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

const FooterContainer= styled.div`
    padding-top: 6rem;
    padding-right: 10rem;
    background-color: #000;
    color: #777;
`
const Container= styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`
const Row= styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px; 
    padding-bottom: 10px;

    ${props => props.first && css`
        padding-bottom: 70px;`
    } 
`
const Column= styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.33333%;
    flex: 0 0 33.33333%;
    max-width: 33.33333%; 
    padding-right: 3rem !important;
    padding-left: 120px ;
`
const Logo=styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    color: #fff; 
    display: block !important;
    margin-bottom: 1.5rem !important; 
`
const SecondColumn= styled.div`
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%; 
    @media screen and (max-width: 960px) {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%; 
    }
`
const MenuList= styled.ul`
    list-style: none;
    
`
const MenuItem= styled.li`
    margin-bottom: 10px; 
`
const MenuLink= styled(Link)`
    color: grey;
    text-decoration: none;
    &.hover{
        color: white;
        font-weight: bolder ;
    }
    
`
const ThirdColumn= styled.div`
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%; 
    text-align: center!important ;
    flex-wrap: wrap;
`
const ThirdList= styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    /* justify-content: space-around; */
    width: 50%;
`
const SocialLink= styled(Link)`
    color: grey;
    text-decoration: none;
    padding: 10px 10px;
    &.hover{
        color: white;
        font-weight: bolder ;
    }
    ${props => props.button && css`
        background-color: darkgreen;
        color: white;
        border: none;
        border-radius: 20px;
    `
    }
`
const FourthColumn= styled.div`
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%; 
    position: relative;
    width: 100%;
    padding: 0px 35px;
    text-align: center ;
`
const Copyright=styled.div`
    border-top: 1px solid #404040;
    &.hover{
        color: white;
    }
`

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <Row first>
                    <Column>
                        <Logo to='/'>
                            <i class="fa-solid fa-recycle fa-fw"></i>
                            RE:SCHOOL Ecology
                        </Logo>
                        <p>We provide a solution for recycling trash based in Tunisia.</p>
                    </Column>
                    <SecondColumn>
                        <MenuList>
                            <MenuItem><MenuLink to="#">Accueil</MenuLink></MenuItem>
                            <MenuItem><MenuLink to="#">Produits</MenuLink></MenuItem>
                            <MenuItem><MenuLink to="#">Mission</MenuLink></MenuItem>
                            <MenuItem><MenuLink to="#">Partenaires</MenuLink></MenuItem>
                            <MenuItem><MenuLink to="#">A Propos</MenuLink></MenuItem>
                        </MenuList>
                    </SecondColumn>
                    <SecondColumn>
                        <MenuList>
                            <MenuItem><MenuLink to="#">Accueil</MenuLink></MenuItem>
                            <MenuItem><MenuLink to="#">Produits</MenuLink></MenuItem>
                            <MenuItem><MenuLink to="#">Mission</MenuLink></MenuItem>
                            <MenuItem><MenuLink to="#">Partenaires</MenuLink></MenuItem>
                            <MenuItem><MenuLink to="#">A Propos</MenuLink></MenuItem>
                        </MenuList>
                    </SecondColumn>
                    <SecondColumn>
                        <MenuList>
                            <MenuItem><MenuLink to="#">Politiques de confidentialité</MenuLink></MenuItem>
                            <MenuItem><MenuLink to="#">Termes &amp; et conditions</MenuLink></MenuItem>
                        </MenuList>
                    </SecondColumn>
                    <ThirdColumn>
                        <ThirdList>
                            <MenuItem>
                                <SocialLink to="#"><i class="fa-brands fa-instagram"></i></SocialLink>
                            </MenuItem>
                            <MenuItem>
                                <SocialLink to="#"><i class="fa-brands fa-twitter"></i></SocialLink>
                            </MenuItem>
                            <MenuItem>
                                <SocialLink to="#"><i class="fa-brands fa-facebook"></i></SocialLink>
                            </MenuItem>
                        </ThirdList>
                        <SocialLink button to="#">Contactez Nous</SocialLink>
                    </ThirdColumn>
                </Row> 

                <Row>
                    <FourthColumn>
                        <Copyright>
                            <p><small>&copy; 2022 Tous les droits sont réservés.</small></p>
                        </Copyright>
                    </FourthColumn>
                </Row> 
            </Container>   
        </FooterContainer>
    );
}

export default Footer;

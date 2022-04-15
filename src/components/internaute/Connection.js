import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Connect=styled.div`
    background-color: grey;
    height : 35px;
    display: flex ;
    justify-content : center ; 
    align-items : center;
    position : sticky;
    z-index : 10;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

const ConnectContainer=styled.div`
    display: flex;
    font-size: 12px;
    height : 35px;
    width: 100% ; 
    padding: 0 150px;
    z-index: 1; 
`

const Item=styled(Link)`
    color: white;
    display: flex;
    justify-self: flex-start;
    align-items: center;
    margin: 0 20px; 
    text-decoration: none;
    cursor: pointer;
`

const Connection = () => {
    return (
        <div>
            <Connect>
                <ConnectContainer>
                    <Item to='/login-client'>
                        <i class="fa-regular fa-user  fa-fw"></i>
                        Espace Client
                    </Item>
                    <Item to='/login-gestionnaire'>
                        <i class="fa-regular fa-circle-user fa-fw"></i>
                        Espace Gestionnaire
                    </Item>
                </ConnectContainer>
            </Connect>
        </div>
    );
}

export default Connection;

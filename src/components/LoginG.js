import React from 'react';
import styled from 'styled-components'

const Page=styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0px; 
    box-sizing: border-box;
`
const Container=styled.div`
    width: 100%;  
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: lightgrey;
    
`
const ContainerBox=styled.div`
    width: 600px;
    height : 500px;
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
    -o-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
    -ms-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
    @media screen and (max-width : 960px){
        width : 80%;
    }
`
const Form=styled.form`
    width: 100%;
    position: relative;
    padding-left: 55px;
    padding-right : 55px;
    padding-top : 178px;
    @media screen and (max-width: 960px){
        padding-left : 15px;
        padding-right : 15px;
    }

`
const Titre=styled.span`
    font-size: 30px;
    color: #fff;
    line-height: 1.2;
    text-align: center;
    display: block;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #57b846;
    padding-top: 50px;
    padding-bottom: 39px;
`
const Username=styled.div`
    width: 70%;
    background-color: #fff;
    border-radius: 27px;
    position: relative;
    z-index: 1;
    margin-bottom: 16px;
`
const Input=styled.input`
    font-size: 15px;
    color: #1b3815;
    line-height: 1.2;
    position: relative;
    display: block;
    width: 100%;
    height: 55px;
    outline : none;
    border : none;
    border-radius: 27px;
    background: #ebebeb;
    padding: 0 35px 0 35px;
    &.focus{
        border-color: transparent !important;
    }
`
const Password=styled.div`
    width: 70%;
    background-color: #fff;
    border-radius: 27px;
    position: relative;
    z-index: 1;
`
const Focus=styled.span`
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    border-radius: 31px;
    background-color: #ebebeb;
    pointer-events: none;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    &.focus{
        width: calc(100% + 20px);
    }
`
const Labels=styled.label`
    font-size: 15px;
    line-height: 1.2;
    text-align: left;
    padding: 0px 30px;
`
const Forgot=styled.div`
    text-align: left;
    padding-top: 13px;
    padding-bottom : 23px;
    padding-left: 20px;
`
const Text=styled.a`
    font-size: 15px;
    color: #57b846;
    line-height: 1.7;
    transition: all 0.4s;
	-webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    cursor: pointer;
    &.focus{
        outline: none !important;
    }
    &.hover{
        text-decoration: none;
        color: #1b3815;
    }
`
const ButtonContainer=styled.div`
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Button=styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #57b846;
    border-radius: 25px;
    font-size: 15px;
    color: #fff;
    line-height: 1.2;
    outline : none;
    border: none;
    padding: 0 20px;
    text-transform: uppercase;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    cursor: pointer;
    &.hover{
        background-color: #1b3815;
        cursor: pointer;
    }
`
const LoginG = () => {
    return (
        <Page>
            <Container>
                <ContainerBox>
                    <Form>
                        <Titre>Espace Gestionnaire</Titre>
                        <Labels>Nom d'utilisateur :</Labels>
                        <Username data-validate="nom d'utilisateur">
                            <Input type="text" name="username" placeholder="nom d'utilisateur"/>
                            <Focus/>
                        </Username>
                        <Labels>Mot de passe :</Labels>
                        <Password data-validate="mot de passe">
                            <Input type="password" name="password" placeholder="********"/>
                            <Focus/>
                        </Password>
                        <Forgot>
                            <Text>Avez-vous oublier votre mot de passe?</Text>
                        </Forgot>
                        <ButtonContainer>
                            <Button>Se Connecter</Button>
                        </ButtonContainer>  
                    </Form>
                </ContainerBox>
            </Container>
        </Page>
    );
}

export default LoginG;

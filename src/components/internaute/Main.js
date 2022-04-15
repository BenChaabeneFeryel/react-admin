import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const Page= styled.div`
    position: relative;
    margin-bottom: 70px;
    justify-content: space-between;
    top: 15vh;
    font-family: "Sen", sans-serif;
`
const Banner= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgb(119,199,121);
    background: linear-gradient(90deg, rgba(119,199,121,1) 0%, rgba(13,121,9,1) 71%, rgba(33,72,32,1) 100%);
    padding : 60px 90px;
    height: 400px;
`
const Titre=styled.div`
    color: white;
    padding: 20px 0px;
    text-align: left;
    font-size: 50px;
    font-weight: bold;
`
const SousTitre=styled.div`
    color: white;
    padding: 20px 0px;
    text-align: left;
    font-size: 20px;
`
const Row=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10rem;
    max-width: 1200px;
    margin: auto;
    padding: 35px 30px;
`
const Paragraph=styled.div`
    padding-top: 15px;
`
const ParagraphTitre=styled.h3`
    font-size: 30px;
    text-align: center;

`
const CardsContainer=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;

`
const Card=styled.div`
    margin : 15px;
`

const Main = () => {
    return (
        <Page>
            <Banner>
                <Titre>Come recycle with us!</Titre>
                <SousTitre>
                    We provide a solution for recycling trash based in Tunisia.
                </SousTitre>
            </Banner>
            <Row>
                <Paragraph>
                    <ParagraphTitre>
                        Titre 1
                    </ParagraphTitre>
                    <div className="support-right">
                        COVID-19 has forced us to close our retail space, but we need
                        support from patrons like yourself now more than ever. Below, we’ve
                        listed the best ways to help us through this season.
                    </div>
                </Paragraph>
                <CardsContainer>
                    <Card>
                        <div className="support-card">
                            <h1>01</h1>
                            <h1>
                                Titre
                                <br />
                                Titre
                            </h1>
                            <div className="card1"></div>
                        </div>
                        <p>
                        Our full product line is still available online here on our site!
                        Getting outside and hiking is still something you can do. Get your
                        gear now!
                        </p>
                    </Card>
                    <Card>
                        <div className="support-card">
                            <h1>02</h1>
                            <h1>Titre</h1>
                            <div className="card2"></div>
                        </div>
                        <p>
                        Since we've changed the way we operate to online only, and to
                        ensure your safety, not all our staff is working. Donate to keep
                        them afloat.
                        </p>
                    </Card>
                    <Card>
                        <div className="support-card">
                            <h1>03</h1>
                            <h1>
                                Titre
                                <br />
                                Titre
                            </h1>
                            <div className="card3"></div>
                        </div>
                        <p>
                        Have all the outdoor gear you need for now? Buy a gift card and
                        use it later or share it with friends and family.
                        </p>
                    </Card>
                </CardsContainer>
            </Row>
            <Row>
                <ParagraphTitre>
                    How we're keeping you safe during COVID-19
                </ParagraphTitre> 
            </Row>
        </Page>
    );
}

export default Main;

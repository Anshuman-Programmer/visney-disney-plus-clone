import React from 'react'
import styled from "styled-components"

function View() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="logo"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/disney.mp4" type="video/mp4"/>
                </video>

            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt="logo"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/marvel.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="logo"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/national-geographic.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="logo"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/pixar.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt="logo"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/star-wars.mp4" type="video/mp4"/>
                </video>
            </Wrap>

        </Container>
    )
}

const Container = styled.div`
    margin-top: 1.5rem;
    padding: 30px 0 ;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 768px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

`

const Wrap = styled.div`

    margin-top: 1.5rem;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
    min-height: 10vw;

    img {
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.1);

        border: 3px solid rgba(249, 249, 249, 0.5);

        video{
            opacity: 1;
        }
    }



    @media (max-width: 768px){

        min-height: 30vw;

    }

`



export default View

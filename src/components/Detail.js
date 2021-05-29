import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import {useParams} from "react-router-dom"
import db from "../firebase";

function Detail() {

    const {id} = useParams()
    const [detailData, setDetailData] = useState({})

    useEffect(() => {
        db.collection("movies")
          .doc(id)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setDetailData(doc.data());
            } else {
              console.log("no such document in firebase");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      }, [id]);

      console.log(detailData)


    return (
        <Container>
            <Background>
                <img alt={detailData.title} src={detailData.backgroundImg} />
            </Background>
            <ImageTitle>
                <img alt={detailData.title} src={detailData.titleImg}/>
            </ImageTitle>

            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/images/play-icon-black.png" alt="play"/>
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src="/images/play-icon-white.png" alt="play"/>
                        <span>trailer</span>
                    </Trailer>
                    <AddList>
                        <span/>
                        <span/>

                    </AddList>
                    <AddList>
                        <img src="/images/group-icon.png" alt="play"/>
                    </AddList>
                </Controls>
                <SubTitle>
                    {detailData.title} • {detailData.subTitle}
                </SubTitle>
                <Description>
                    {detailData.description}
                </Description>
            </ContentMeta>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    min-height: calc(100vh - 250px);
    display: block;
    top: 20vh;
    padding: 0 calc(3.5vw + 5px);
    bottom: 0;

`

const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;

    img{
        max-height: 15vw;
    }

    @media (max-width: 768px){

        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;

        img{
            max-height: 40vw;
        }



    }

`

const Background = styled.div`

    left: 0;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0;
    z-index: -1;

    img{
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    }

    @media (max-width: 768px){

        object-position: center;

        width: initial;

    }

`

const ContentMeta = styled.div`
    max-width: 874px;
`


const Controls = styled.div`
    align-items: center;
    display: inline-flex;
    margin: 24px 0px;
    min-height: 56px;
    
    @media (max-width: 768px){

    flex-direction: column;
    justify-content: center;
    width: 100%;

    }


    

`

const Player = styled.button`
    font-size: 15px;
    margin: 0 22px 10px 0;
    height:8vh;
    border-radius: 10px;
    align-items: center;
    cursor: pointer;
    display: flex;
    border-width: 0;
    justify-content: center;
    letter-spacing: 1.8px;
    min-width: 10vw;
    text-align: center;
    text-transform: uppercase;
    background: rgb(249, 249, 249);
    padding: 0 20px;

    img{
        height: 60%;
        object-fit: contain;
        padding-right: 0.8rem;
    }

    span{
        font-weight: 700
    }

    &:hover{
        background: rgb(198, 198, 198);
        
    }

    
`

const Trailer = styled(Player)`

    background: rgba(0, 0, 0, 0.3);
    min-width:8vh;
    border: 3px solid rgba(249, 249, 249, 0.2);
    color: white;

    &:hover{
        background: rgba(198, 198, 198, 0.3);
        
    }

`

const AddList = styled.div`
    margin-right: 8px;
    height: 8vh;
    width: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 3px solid rgba(249, 249, 249, 0.2);
    cursor: pointer;

    span{

        background-color: rgb(249, 249, 249);

        display: inline-block;

        &:first-child {
            height: 2px;
            transform: translateX(8px) rotate(0deg);
            width: 16px;
        }

        &:nth-child(2) {
            height: 2px;
            transform: translateX(-8px) rotate(90deg);
            width: 16px;
        }
    }

    @media (max-width: 768px){

    display: none;

    }


`

const SubTitle = styled.div`

    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;

    @media (max-width: 768px){

        font-size: 12px;

    }


`


const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb( 249, 249, 249);

    @media (max-width: 768px){

    font-size: 14px;

    }

`

export default Detail

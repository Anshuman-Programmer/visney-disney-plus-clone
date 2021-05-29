import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectOriginal } from "../features/movieSlice/movieSlice";

function Originals() {

    const movies = useSelector(selectOriginal);


    return (
        <Container>
            <h4>Originals</h4>

            

            <Content>
                    {
                        movies && movies.map((movie,key)=>(
                            <Wrap key={key}>
                                {/* {movie.id} */}
                                <Link to={"/detail/" + movie.id}>
                                    <img src={movie.cardImg} alt={movie.title}/>
                                </Link>

                            </Wrap>
                        ))
                    }
                </Content>

           
            
        </Container>
    )
}

const Container = styled.div`
    padding: 0 0 26px;

    h4{
        margin-bottom: 0.8rem;
        font-size: 1.5rem;
    }

    @media (max-width: 768px){

        h4{
            font-size: 1.2rem;
        }

    }

`

const Content = styled.div`
    display: grid ;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 1.5rem;
    width: 100%;

    @media (max-width: 768px){

        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-gap: 0.8rem;

    }

`

const Wrap = styled.div`
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  min-height: 12vw;

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
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }

  @media (max-width: 768px){

    min-height: 25vw;

    }   
`;

export default Originals

import React,{useEffect} from 'react'
import styled from "styled-components";
import Imgslider from './Imgslider';
import View from "./View";
import Recommends from "./Recommends";
import NewVisney from "./NewVisney";
import Originals from "./Originals";
import Tranding from "./Tranding";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movieSlice/movieSlice";
import { selectUserName } from "../features/user/userSlice";




function Home() {

    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)

    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];
    
    useEffect(() => {
        console.log("hello");
        db.collection("movies").onSnapshot((snapshot) => {
          snapshot.docs.map((doc) => {
            console.log(recommends);
            switch (doc.data().type) {
              case "recommend":
                recommends = [...recommends, { id: doc.id, ...doc.data() }];
                break;
    
              case "new":
                newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                break;
    
              case "original":
                originals = [...originals, { id: doc.id, ...doc.data() }];
                break;
    
              case "trending":
                trending = [...trending, { id: doc.id, ...doc.data() }];
                break;
            }
          });
    
          dispatch(
            setMovies({
              recommend: recommends,
              newDisney: newDisneys,
              original: originals,
              trending: trending,
            })
          );
        });
      }, [userName]);


    return (
        <Container>
            <Imgslider/>
            <View/>
            <Recommends/>
            <NewVisney/>
            <Originals/>
            <Tranding/>
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 3.5vw;
    background: url(/images/home-background.png);

`

export default Home

import React from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import { selectUserName, setUserLoginDetails, selectUserPhoto, setSignOutState } from "../features/user/userSlice";


function Login() {

    const dispatch = useDispatch()
    const history = useHistory()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)


    const handleAuth = () =>{

        if(!userName){
            auth.signInWithPopup(provider).then((result)=>{
                setUser(result.user)
            }).catch((error)=>{
                alert(error.message)
            }) 
        }else if(userName){
            auth.signOut().then(()=>{
                dispatch(setSignOutState())
                history.push("./")
            }).catch((error)=>{
                alert(error.message)
            })

        }        
    }

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }))       
    }

    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="logo-1"/>
                    <SignUp onClick={handleAuth}>GET ALL THERE</SignUp>
                    <Description>Get instant confirmation. Choose from a wide range of properties which Booking.com offers! Choose From a Wide Range of Properties Which Booking.com Offers. Search Now!</Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="logo-2"/>
                </CTA>
                <BgImage/>
            </Content>
            
        </Container>
        
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    width: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    z-index: -1;
    background-image: url("/images/login-background.jpg");
`;

const CTA = styled.div`
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0px auto 2vh auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
`;

const CTALogoOne = styled.img`
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
    margin: 0 auto 12px;
`;

const SignUp = styled.a`
    font-weight: 700;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 0.7px;
    font-size: 18px;
    padding: 16.5px 0;
    border:  1px solid transparent;
    border-radius: 5px;

    &:hover{
        background-color: #0483ee;
        cursor: pointer;
    }
`;

const Description = styled.p`
    font-size: 12px;
    margin: 0 0 24px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 1.5px;

`;

const CTALogoTwo = styled.img`
    width: 100%;
    margin: 0 auto;
    max-width: 600px;
    display: inline-block;
    vertical-align: bottom;
    
`


export default Login;

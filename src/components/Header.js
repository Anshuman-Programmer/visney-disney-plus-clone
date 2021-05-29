import React,{useEffect} from 'react'
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import { Link } from 'react-router-dom'
import { selectUserName, setUserLoginDetails, selectUserPhoto, setSignOutState } from "../features/user/userSlice";

function Header({avaterNo}) {

    const dispatch = useDispatch()
    const history = useHistory()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() => {

        auth.onAuthStateChanged(async(user)=>{
            if(user){
                setUser(user)
                history.push('/home')
            }
        })

    }, [userName])

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
                history.push("./home")
                history.push("./")
            }).catch((error)=>{
                alert(error.message)
            })

        }

        

    }

    const handleGuest = () =>{

        if(!userName){

            dispatch(setUserLoginDetails({
                name: "GUEST",
                email: "guest@email.com",
                photo: "/images/avatar.png",
                
            }))
            
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

    const setGuest = () => {

        dispatch(setUserLoginDetails({
            name: "GUEST",
            email: "guest@email.com",
            photo: "/images/avatar.png",
            
        }))

        history.push("./home")
    }

    return (
        <Nav>
            <Logo>
                <Link to="/home">
                <img src="/images/logo.svg" alt="Header_logo"/>
                </Link>
                
            </Logo>
            {!userName ? (
            <NavBtn>
                <Login onClick={setGuest}>GUEST</Login>
                <Login onClick={handleAuth}>Login</Login>
            </NavBtn>
        ) : (
            <>
            <NavMenu>
                <a>
                <img src="/images/home-icon.svg" alt="HOME" />
                <span>HOME</span>
                </a>
                <a>
                <img src="/images/search-icon.svg" alt="SEARCH" />
                <span>SEARCH</span>
                </a>
                <a>
                <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                <span>WATCHLIST</span>
                </a>
                <a>
                <img src="/images/original-icon.svg" alt="ORIGINALS" />
                <span>ORIGINALS</span>
                </a>
                <a>
                <img src="/images/movie-icon.svg" alt="MOVIES" />
                <span>MOVIES</span>
                </a>
                <a>
                <img src="/images/series-icon.svg" alt="SERIES" />
                <span>SERIES</span>
                </a>
            </NavMenu>
            {avaterNo ? (            
            <SignOut>
                <UserImg src={userPhoto} alt={userName}/>
                <DropDown>
                    <span onClick={handleAuth}>Sign-Out</span>
                </DropDown>
            </SignOut>):
            (null)}

            
            </>
        )}
        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    padding: 0 36px;
    align-items: center;
    letter-spacing: 16px;
    z-index: 10;

`;

const Logo = styled.a`
    padding: 0;
    width: 90px;
    margin-top: 4px;
    max-height: 70px;
    display: inline-block;

    img{
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px 0px 0px 20px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        

        img{
            height: 20px;
            min-width: 20px;
            z-index: auto;
        }

        span{
            color: #f9f9f9;
            font-size: 13px;
            padding: 5px 5px;
            letter-spacing: 1.4px;

        }

        span:hover{
            
            text-decoration: underline;
            line-height: 1

        }    
    }

    @media(max-width: 768px){
        display: none;
    }
`;


const NavBtn = styled.div`


`
const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 5px;
    border: 1px solid #f9f9f9;
    border-radius: 5px;
    transition: all 0.2s ease;
    margin-left: 1rem;

    &:hover {
        background-color: #f9f9f9;
        color: black;
        cursor: pointer;

    }
`;

const UserImg = styled.img`
`

const DropDown = styled.div`
    position: absolute;
    top: 50px;
    right: 10px;
    background-color: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px;
    padding: 10px;
    letter-spacing: 3px;
    width: 120px;
    opacity: 0;

`

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImg}{
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
        object-fit: cover;
    }

    &:hover{
        ${DropDown}{
            opacity: 1;
            transition-duration: 1s;
        }
    }

`




export default Header

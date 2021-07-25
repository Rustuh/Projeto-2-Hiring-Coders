import styled from 'styled-components';
import img from './assets/images/bg.png';


export const Container =styled.div`
width: 100%;
height: 100vh;
max-width: 100%;
max-height: 100vh;
background-image: url(${img});
padding: 0px;
font-family: "Roboto", sans-serif;

@media (max-width:600px){
    height: 1200px;
    display: block;
    margin-top: 20px;

    & p{
        text-align: center;
        margin-left: 0;
        margin-top: 40px;
    }

    &img{
        margin: 0 auto;
    }
}
`
export const Logo =styled.img`
width: 300px;
height: 300px;
display: flex;
justify-content: center;
align-items: center;
`
export const Center =styled.div `
display: flex;
justify-content: center;
padding: 20px;
`

export const Title =styled.h1`
display:flex;
justify-content: center;
text-align: center;
align-items: center;
font-size: 3.5rem;
`

export const Intro = styled.p`
display: flex;
height: 150px;
text-align: center;
width: 450px;
margin-left: auto;
margin-right: auto;
font-size: 1.5rem;
margin-bottom: -10px;
color: #777575;
`
export const Buttons =styled.div`
display: flex;
justify-content: center;
margin-top: 25px;
`
export const ButtonC =styled.button`
width: 200px;
height: 60px;
border-radius:40px ;
margin-right: 15px;
background: #b56242;
color:white;
font-weight: bold;
cursor: pointer;
border: none;
font-size: 1.2rem;
`
export const ButtonP =styled.button`
width: 200px;
height: 60px;
border-radius:40px ;
margin-right: 15px;
background: #f23567;
color: white;
font-weight: bold;
cursor: pointer;
border: none;
font-size: 1.2rem;
`


export const Footer =styled.div`
background-color: #C8C8C8;
border-top: 1px solid #E7E7E7;
text-align: center;
padding: 20px;
position: fixed;
left: 0;
bottom: 0;
height: 60px;
width: 100%;
`
export const FooterDesc=styled.p`
color: #888
`
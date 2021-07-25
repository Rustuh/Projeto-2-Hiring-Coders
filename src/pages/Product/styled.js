import styled from 'styled-components';


export const Container =styled.div`
width: 100%;
height: 100vh;
max-width: 100%;
max-height: 100vh;
padding: 0;
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

}
`

export const Title =styled.h1 `
display: flex;
justify-content: center;
text-align: center;
font-weight: bolder;
font-size: 4rem;
color: #333347;
`
export const Intro =styled.p`
text-align: center;
align-items: center;
font-size: 1.5rem;
color: #333347;
`
export const ContainerForm =styled.div`
display: grid;
justify-content: center;
align-items: center;
padding: 10px;
`


export const Form =styled.form`
width:500px;
display: flex;
flex-direction: column;
height: 2.5rem;
border-radius: 20px;
padding: 10px;
font-size: 1.5rem;
`
export const Select = styled.select`
  width: 100%;
  height: 2.5rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  border-radius: 1rem;
  border: 1px solid #055f89;
  padding: 0.5rem 1rem;
  &:focus {
    outline: none;
  }
`;

export const Buttons =styled.div`
justify-content: center;
display: flex;
justify-content: space-space-around;
margin: 10px;
padding-top: 10px;
padding-bottom: 20px;
`

export const Back =styled.button`
margin-right: 30px;
width: 160px;
font-weight: bolder;
border-radius: 40px;
border:solid 1px ;
background: #333347;
color: white;
height: 3.5rem;
cursor: pointer;
`
export const Add =styled.button`
margin-left: 30px;
width: 200px;
font-weight: bolder;
border-radius: 40px;
border:solid 1px ;
background: #022d3d;
color: white;
height: 3.5rem;
cursor: pointer;
`

export const Label =styled.label`
padding: 15px;
`
export const Inpunt =styled.input`
border-radius: 1rem;
padding: 10px;
border: 1px solid #333347;
`
export const Footer =styled.div`
background-color: #F8F8F8;
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
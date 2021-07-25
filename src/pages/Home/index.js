import React from 'react';
import * as S from '../../styled';
import logo from '../../assets/images/logo.png';
import { useHistory } from 'react-router-dom';



export default function Home() {
  const history = useHistory();
  const HandleClients = () => {
    history.push("customer");
  }

  const HandleProducts = () => {
    history.push("product")
  } 
  return (  <>
      <S.Container>
      <S.Center>
      <S.Logo src={logo} /> 
      </S.Center>   
      <S.Title>Register Your Used Electronic</S.Title>
      <S.Intro>Record management system for resale of your electronics. Click Customer to add your record and click the Product button to add the product.</S.Intro>
      <S.Buttons>
      <S.ButtonC onClick={HandleClients}>Customer</S.ButtonC>
      <S.ButtonP onClick={HandleProducts}>Product</S.ButtonP>
      </S.Buttons>
      <S.Footer>
          <S.FooterDesc> &copy; 2021 by Rustuh - All Rights Reserved</S.FooterDesc>     
      </S.Footer>
      
      </S.Container>
       
       </>
  );
}
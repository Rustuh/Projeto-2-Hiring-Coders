import React, { useState } from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

export default function Costumer() {
  const history = useHistory();
  const HandleBack = () => {
    history.push("/");
  };
  const [name, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState();
  const [tel, setTel] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/");

    localStorage.setItem("@Desafio#2", JSON.stringify({ name:name, email:email, cpf:cpf , tel:tel}));
    alert('Costumer Added!');
    window.location.reload()
    
  };



  return (
    <S.Container>
    <S.Title>Customer Management</S.Title>
    <S.Intro>Section for adding customers</S.Intro>
    <S.ContainerForm>
      <S.Form onSubmit={handleSubmit}>
        <S.Label>Name</S.Label>
        <S.Inpunt
          placeholder="Enter your full name"
          type="text"
          required
          value={name}
          onChange={(e) => setNome(e.target.value)}
        />

        <S.Label>CPF</S.Label>
        <S.Inpunt
          placeholder="Enter only the numbers"
          type="numb"
          required
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <S.Label>E-mail</S.Label>
        <S.Inpunt
          placeholder="contato@example.com"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.Label>Telephone</S.Label>
        <S.Inpunt
          placeholder="Enter only the numbers"
          type="tel"
          required
          onChange={(e) => setTel(e.target.value)}
        />

      <S.Buttons>
        <S.Back type="button" onClick={HandleBack}>
          Back
        </S.Back>
        <S.Add type="submit" >Add Customer</S.Add>
      </S.Buttons>
          
      <S.Footer>
        <S.FooterDesc> &copy; 2021 by Rustuh - All Rights Reserved</S.FooterDesc>     
      </S.Footer>
        </S.Form>
      </S.ContainerForm>
    </S.Container>
  );
}
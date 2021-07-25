import React, { useState }from 'react';
import * as S from './styled'
import { useHistory } from 'react-router-dom';


export default function Products() {
  const history =useHistory();
  const HandleBack = () => {
     history.push ("/")
    
  };

  const [category, setCategory] = useState();
  const [type, setType] = useState();
  const [desc, setDesc] = useState();
  const [price, setPrice] = useState();
  const [inventory, setInventory] = useState();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/");

    localStorage.setItem("@welcome-app", JSON.stringify({category,type,desc,price,inventory}));
    alert('Product Added!');
    window.location.reload()
    
  };


  return (
    <S.Container>
    <S.Title>Product Management</S.Title>
    <S.Intro>Section for adding products.</S.Intro>
    <S.ContainerForm > 
      <S.Form onSubmit={handleSubmit}>
        <S.Label>Category</S.Label>
        <S.Select 
          input={category}
          placeholder="Category"
          type="option"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
            <option value="">Choose the category</option>
            <option value ="option1" >Computer/Notebooks/Ultrabooks</option>
            <option value ="option2" >Motherboards/Processors/Cooler(fan)/Memoirs</option>
            <option value ="option3" >Cellphone/Smartphones/Tablets</option>
            <option value ="option4" >Disc (HD) e SSD/SSD/Blu-Ray</option>
            <option value ="option5" >Others</option>
          </S.Select>
    
        <S.Label>Type</S.Label>
        <S.Inpunt 
        placeholder="Product Type" 
        type="text"
        required
        value={type}
        onChange={(e) => setType(e.target.value)}/>

        <S.Label>Description</S.Label>
        <S.Inpunt 
        placeholder="Description with features and functionalities" 
        type="text"
        required
        value={desc}
        onChange={(e) => setDesc(e.target.value)}/>

        <S.Label>Price</S.Label>
        <S.Inpunt 
        placeholder="Enter only the numbers" 
        type="numb"
        required
        value={price}
        onChange={(e) => setPrice(e.target.value)} />

        <S.Label>Inventory</S.Label>
        <S.Inpunt 
        placeholder ="Stock in whole numbers" 
        type="numb"
        required
        value={inventory}
        onChange={(e) => setInventory(e.target.value)}/>

        <S.Buttons>
          <S.Back type="button" onClick ={HandleBack}>Back</S.Back>
          <S.Add type ="submit">Add Product</S.Add>
        </S.Buttons>

        <S.Footer>
            <S.FooterDesc> &copy; 2021 by Rustuh - All Rights Reserved</S.FooterDesc>     
        </S.Footer>
        </S.Form>
    </S.ContainerForm>
    </S.Container>
  );
}
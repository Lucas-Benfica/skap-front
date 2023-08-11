import { styled } from "styled-components";

export const ContainerSale = styled.div`
    width: 100%; 
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f5f4f4;
`

export const FormCreateCar = styled.div`
  width: 45%;
  height: auto;
  padding: 50px 0;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
  
  h1 {
    font-size: 20px;
    color: #B30000; 
    font-weight: 700;
    margin-bottom: 30px;
  }

  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    font-size: 15px;
    font-weight: 700;
    color: #B30000; /* Vermelho mais claro */
  }

  input,
  textarea,
  select {
    width: 100%;
    height: 30px;
    font-size: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 5px;
    outline: none;
    &:focus {
      border-color: red;
      box-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
    }
    margin-bottom: 15px; 
  }

  textarea{
    height: auto;
  }

  select {
    height: 40px;
  }

  button[type="submit"] {
    width: 100%;
    height: 40px;
    background-color: #B30000;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background-color: #8A0000; /* Vermelho mais escuro */
      color: #FFD3D3; /* Cor do fundo mais clara */
    }
  }
`;

export const ButtonAddPhoto = styled.button`
  background-color: #B30000;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: 5px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #8A0000;
    color: #FFD3D3;
  }
`;

export const InputWithButton = styled.div`
  display: flex;
  align-items: center;

  input {
    flex: 1;
    height: 30px;
    font-size: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 5px;
    outline: none;
    &:focus {
      border-color: red;
      box-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
    }
  }

  button {
    background-color: #B30000;
    color: white;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-left: 10px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background-color: #8A0000;
      color: #FFD3D3;
    }
  }
`;






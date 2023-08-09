import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MainDivSingUp = styled.div`
    width: 100vw; 
    height: 100vh;
    display: flex;
`

export const DivLogo = styled.div`
    width: 45%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 420px;
        object-fit: cover;
    }
`
export const DivForm = styled.div`
    width: 55%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledForm = styled.form`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFD3D3;
  border: 30px solid #FFD3D3;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(255, 0, 0, 0.5); 


  h1 {
    font-size: 20px;
    color: #B30000; /* Vermelho mais claro */
    font-weight: 700;
    margin-bottom: 30px;
  }

  .divForm {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }

  span {
    margin: 0;
  }

  label {
    font-size: 15px;
    font-weight: 700;
    color: #B30000; /* Vermelho mais claro */
  }

  input {
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
  }
`;

export const SubmitDiv= styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    margin: 10px 0 20px;
    justify-content: space-around;
`;

export const SubmitButton = styled.button`
  width: 200px;
  height: 100%;
  background-color: #B30000; /* Vermelho */
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #8A0000; /* Vermelho mais escuro */
    color: #FFD3D3; /* Cor do fundo mais clara */
  }
`;

export const StyledLink = styled(Link)`
    font-size: 12px;
    color: black;
    //text-decoration: none;
`;
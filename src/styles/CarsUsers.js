import { styled } from "styled-components";


export const CarContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px; /* Adicione o espaçamento vertical desejado */
`;

export const OptionsCarContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left:15px;
    gap: 8px; /* Espaçamento entre os ícones */
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 83%;
  padding: 30px;
`;
export const Title = styled.h1`
  font-size:22px;
`;

export const IconsContainer = styled.div`
    display: flex;
    margin-left: 15px;
    flex-direction: column;
    gap: 8px;
`;
export const StyledIcon = styled.span`
    cursor: pointer;
`;
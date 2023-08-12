import { styled } from "styled-components";

export const CardStyled = styled.div`
  width: 70%;
  height: 190px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
`;

export const FirstDiv = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const FirstImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 8px; 
  border-bottom-left-radius: 8px;
`;

export const SecondDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 10px 10px 0 10px;
  cursor: pointer;
`;

export const UpperDiv = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LowerDiv = styled.div`
  height: 10%;
  width: 100%;
  border-top: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
`;

export const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const H1 = styled.h1`
  font-size: 20px;
  color: rgb(46, 46, 55);
`;

export const H2 = styled.h2`
  margin-top: 5px;
  font-size: 17px;
  color: rgb(139, 140, 153);
`;

export const P = styled.p`
  font-size: 15px;
  color: rgb(46, 46, 55);
`;

export const ThirdDiv = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    font-size: 32px;
    color: #000000;
    font-weight: 700;
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  color: #000; 
`;
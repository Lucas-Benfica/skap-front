import { styled } from "styled-components"

export const ContainerHome = styled.div`
    width: 100vw; 
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f5f4f4;
`
export const SearchContainer = styled.div`
    width: 60%; 
    height: 150px;
    margin: 120px auto 50px;
    box-shadow: rgba(46, 45, 55, 0.12) 0px 1px 2px;
    padding: 24px 32px;
    border-radius: 8px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1{
        width: 115px;
        font-size: 18px;
        color: black;
        border-bottom: solid 2px red;
    }
    div{
        display: flex;
        width: 100%;
    }
    input{
        width: 580px;
        height: 45px;
    }
    button{
        width: 350px;
        height: 45px;
    }
`
export const ContainerCategories = styled.div`
    width: 1140;
    height: 250px;
    margin: 0  auto;

    h1{
        font-size: 1.1rem;
        color: rgb(105, 105, 119);
        margin: 0px 0px 16px;
    }
    & > div{
        display: flex;
        width: auto;
        gap:15px;    
        align-items: center;
        div{
            width: 216px;
            height: 216px;
            border-radius: 8px; 
            background-color: white;
            position: relative;
            cursor: pointer;
            p {
                position: absolute;
                left: 5px;
                top: 5px;
                color: rgb(255, 255, 255);
                font-weight: 500;
                font-size: 1.5rem;
            }
            img{
                width: 216px;
                height: 216px;
                object-fit: cover;
                border-radius: 8px;
            }
        }
    }
`
export const ContainerRanking = styled.div`
    width: 1140px;
    height: 250px;
    margin: 25px  auto 0;

    h1{
        font-size: 1.1rem;
        color: rgb(105, 105, 119);
        margin: 0px 0px 16px;
    }
    & > div{
        display: flex;
        width: auto;
        justify-content: space-between;    
        align-items: center;
    }
`
export const MiniCard = styled.div`
    width: 176px;
    height: 220px;
    border-radius: 8px; 
    background-color: blue;
    position: relative;
    cursor: pointer;
    p {
        position: absolute;
        left: 5px;
        top: 5px;
        color: red;
        font-weight: 500;
        font-size: 1.3rem;
        z-index: 3;
    }
    h2{
        position: absolute;
        left: 5px;
        top: 25px;
        color: rgb(255, 255, 255);
        font-weight: 500;
        font-size: 1.5rem;
        z-index: 3;
    }
    div{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 55px;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 8px 8px 0 0;
        z-index: 1;
    }
    img{
        width: 176px;
        height: 220px;
        object-fit: cover;
        border-radius: 8px;
    }
`;
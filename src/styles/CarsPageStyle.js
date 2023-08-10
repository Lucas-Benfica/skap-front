import { styled } from "styled-components";
import { IoIosOptions } from "react-icons/io";

export const ContainerPageCarros = styled.div`
    width: 100vw; 
    height: 100%;
    padding-bottom: 200px;
    display: flex;
    flex-direction: column;
    background: #f5f4f4;
`
export const HeaderMain = styled.div`
    width: 100%; 
    height: 64px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 50;
    background-color: white;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 500;
    color: rgb(46 45 55/var(--tw-text-opacity)); 
    border-bottom: 1px solid rgba(0,0,0,.08);  

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 8px;
    img{
        width: 200px;
        cursor: pointer;
    }
    .options{
        width: 150px;
        display: flex;
        justify-content: space-between;
        p{
            cursor: pointer;
        }
    }
    .UserOptions{
        width: 200px;
        display: flex;
        justify-content: space-around;
        & svg {
            color: #ff0000; 
            font-size: 24px; 
            cursor: pointer;
        }
        div{
            display: flex;
            gap:5px;
            cursor: pointer;
            align-items: center;
        }
    }
    a {
        text-decoration: none; /* Remove sublinhado */
        color: inherit; /* Herda a cor do texto do elemento pai */
    }
`;
export const SecondHeader = styled.div`
    width: 100%; 
    height: 64px;
    position: fixed;
    left: 0;
    top: 64px;
    z-index: 50;
    background-color: white;
    font-size: .75rem;
    line-height: 1rem;
    font-weight: 500;
    color: rgb(46 45 55/var(--tw-text-opacity));
    box-shadow: 2px 2px 3px 0 rgba(0,0,0,.04);
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        width: 220px;
        align-items: center;
        gap: 10px;   
        & svg {
                color: #000000; 
                font-size: 24px; 
                cursor: pointer;
            }
    }
    .last{
        display: flex;
        justify-content: end;
    }
`;

export const StyledIcon = styled(IoIosOptions)`
    color: #000000; 
    font-size: 24px; 
`;

export const ContainerProdutos = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    & > h1{
        font-size: 20px;
    }
`;
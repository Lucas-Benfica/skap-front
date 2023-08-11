import { styled } from "styled-components";
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { FaCar } from 'react-icons/fa';

export default function UserPage() {

    return (
        <ContainerSale>
            <Header />
            <ContainerUserInfo>
                <Options>
                    <InfoUser>
                        <h1>Lucas Soares Benfica</h1>
                        <h2>lucassoaresbenfica@gmail.com</h2>
                        <div></div>
                    </InfoUser>
                    <MenuDiv>
                    <OptionDiv>
                        <FiHeart size={IconSize} color="red" />
                        <Link to="/usuario/favoritos">Favoritos</Link>
                    </OptionDiv>
                    <OptionDiv>
                        <FaCar size={IconSize} color="blue" /> {/* Use FaCar here */}
                        <Link to="/usuario/meus-anuncios">Meus anúncios</Link>
                    </OptionDiv>
                    </MenuDiv>
                </Options>
            </ContainerUserInfo>
        </ContainerSale>
    );
}

const ContainerSale = styled.div`
    width: 100vw; 
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f5f4f4;
`
const ContainerUserInfo = styled.div`
    width: 100%; 
    height: 100%;
    display: flex;
    margin-top: 64px;
`
const Options = styled.div`
    width: 300px; 
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;

    border-right: 1px solid rgba(0,0,0,.08);

`
const InfoUser = styled.div`
    width: 100%; 
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap:20px;
    padding-top: 20px;
    div{
        width: 80%; 
        height: 1px;
        background-color: rgba(0,0,0,.08);  
    }
`
const MenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`;

const OptionDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  a {
    text-decoration: none; /* Remove a decoração de texto do Link */
    color: inherit; /* Mantém a cor padrão do pai (OptionDiv) */
    }
`;

const IconSize = 20;
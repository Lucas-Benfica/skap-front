import { styled } from "styled-components";
import Header from "../components/Header";
import { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { FiHeart, FiLogOut } from 'react-icons/fi';
import { FaCar} from 'react-icons/fa';
import api from "../services/api";
import useAuth from "../hooks/useAuth";
import CarCard from "../components/CardCar";

export default function UserPage() {
    const [selectedOption, setSelectedOption] = useState("favoritos");
    const [user, setUser] = useState({name:'',email:'',cpf:'',phoneNumber:'',userSales:[],favorites:[]});
    const { auth } = useAuth();

    const navigate = useNavigate()

    useEffect(()=>{
        const promise = api.getUserById(auth);
        promise.then( (res) => {
            setUser(res.data);
        });
        promise.catch((err) => {
            alert(err.response.data);
        });
    },[]);

    function logout(){
        const shouldLogout = window.confirm("Deseja sair?");
        if (shouldLogout) {
            localStorage.removeItem("auth"); 
            navigate("/"); 
            window.location.reload();
        }
    }

    return (
        <ContainerSale>
            <Header />
            <ContainerUserInfo>
                <Options>
                    <InfoUser>
                        <h1>{user.name}</h1>
                        <h2>{user.email}</h2>
                        <h2>{formatCPF(user.cpf)}</h2>
                        <h2>{formatPhoneNumber(user.phoneNumber)}</h2>
                        <div></div>
                    </InfoUser>
                    <MenuDiv>
                        <OptionDiv>
                            <FiHeart size={IconSize} color="red" />
                            <Link
                                to="/usuario/favoritos"
                                onClick={() => setSelectedOption("favoritos")}
                                style={{ textDecoration: selectedOption === "favoritos" ? "underline red" : "none" }}
                            >
                                Favoritos
                            </Link>
                        </OptionDiv>
                        <OptionDiv>
                            <FaCar size={IconSize} color="blue" />
                            <Link
                                to="/usuario/anuncios"
                                onClick={() => setSelectedOption("Meus Anúncios")}
                                style={{ textDecoration: selectedOption === "Meus Anúncios" ? "underline red" : "none" }}
                            >
                                Meus Anúncios
                            </Link>
                        </OptionDiv>
                        <OptionDiv>
                            <FiLogOut size={IconSize} color="orange" />
                            <p onClick={logout}>
                                Sair
                            </p>
                        </OptionDiv>
                    </MenuDiv>
                </Options>
                <List>
                {(selectedOption === 'favoritos') ?
                user.favorites.map((car) => <CarCard key={car.id} id={car.id} car={car} />)
                :
                user.userSales.map((car) => <CarCard key={car.id} id={car.id} car={car} />)
                }
                </List>
            </ContainerUserInfo>

        </ContainerSale>
    );
}

function formatCPF(cpf) {
    const cleanCPF = cpf.replace(/\D/g, '');
    return cleanCPF.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
}
function formatPhoneNumber(phoneNumber) {
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    if (cleanNumber.length === 10) {
        return cleanNumber.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    } else if (cleanNumber.length === 11) {
        return cleanNumber.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else {
        return cleanNumber;
    }
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
    width: 17%; 
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;

    border-right: 1px solid rgba(0,0,0,.08);

`
const InfoUser = styled.div`
    width: 100%; 
    height: auto;
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
    text-decoration: none; 
    color: inherit; 
    }
    p{
        cursor: pointer;
    }
`;

const IconSize = 20;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 83%;
  padding: 30px;
`;
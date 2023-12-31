import { HeaderMain } from "../styles/CarsPageStyle";
import { HiUserCircle, HiHeart } from "react-icons/hi";
import logo from "../assets/skap2.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

export default function Header(){
    const navigate = useNavigate();
    const [logged, setLogged] = useState(false);

    const {auth} = useAuth();

    useEffect(() => {
        if(auth) setLogged(true);
    }, []);
 
    function toSale(){
        if(auth) navigate("/anuncio");
        else{
            alert("É preciso estar logado para criar um anúncio!");
            navigate("/login");
        }
    }

    const location = useLocation();
    
    const handleReload = () => {
        if (location.pathname === '/carros') {
        window.location.reload();
        }
    };
    return (
        <HeaderMain className="main">
                <img src={logo} />
                <div className="options">
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/carros"><p onClick={handleReload}>Comprar</p></Link>
                    <p onClick={toSale}>Vender</p>
                </div>
                <div className="UserOptions">
                    {logged ? (
                        <div>
                            <HiUserCircle onClick={()=>navigate("/usuario/favoritos")}/>
                        </div>
                    ) : (
                        <div>
                            <HiUserCircle onClick={()=>navigate("/login")}/>
                            <Link to="/login"><p>Entrar</p></Link>       
                        </div>
                    )}
                    <HiHeart />
                </div>
            </HeaderMain>
    );
}
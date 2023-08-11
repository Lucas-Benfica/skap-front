import { HeaderMain } from "../styles/CarsPageStyle";
import { HiUserCircle, HiHeart } from "react-icons/hi";
import logo from "../assets/skap2.png"
import { Link, useNavigate } from "react-router-dom";

export default function Header(){
    const navigate = useNavigate();

    return (
        <HeaderMain className="main">
                <img src={logo} />
                <div className="options">
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/carros"><p>Comprar</p></Link>
                    <Link to="/anuncio"><p>Vender</p></Link>
                </div>
                <div className="UserOptions">
                    <div>
                        <HiUserCircle onClick={()=>navigate("/login")}/>
                        <Link to="/login"><p>Entrar</p></Link>       
                    </div>
                    <HiHeart />
                </div>
            </HeaderMain>
    );
}
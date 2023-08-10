import { HeaderMain } from "../styles/CarsPageStyle";
import { HiUserCircle, HiHeart } from "react-icons/hi";
import logo from "../assets/skap2.png"
import { Link, useNavigate } from "react-router-dom";

export default function Header(){
    const navigate = useNavigate();

    return (
        <HeaderMain className="main">
                <img src={logo} onClick={()=>navigate("/")}/>
                <div className="options">
                    <Link to="/carros"><p>Comprar</p></Link>
                    <Link to="/vendas"><p>Vender</p></Link>
                </div>
                <div className="UserOptions">
                    <div>
                        <HiUserCircle />
                        <p>Entrar</p>
                    </div>
                    <HiHeart />
                </div>
            </HeaderMain>
    );
}
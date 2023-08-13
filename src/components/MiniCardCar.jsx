import { useNavigate } from "react-router-dom";
import { MiniCard } from "../styles/HomeStyles";

export default function MiniCardCar({ car, id }) {
    const navigate = useNavigate();
    return (
        <MiniCard onClick={()=>navigate(`/carros/${id}`)}>
            <img src={car.photos[0]} />
            <p>{car.brand}</p>
            <h2>{car.name}</h2>
            <div></div>
        </MiniCard>
    );
}

import { useEffect, useState } from "react";
import api from "../services/api";
import { ContainerRanking, MiniCard } from "../styles/HomeStyles";
import MiniCardCar from "./MiniCardCar";

const car = {
    name: "HB20",
    branch: "Fiat",
    image: "https://conteudo.imguol.com.br/c/entretenimento/cd/2020/09/30/hyundai-hb20-sense-1601515945848_v2_4x3.jpg"
}

export default function Ranking(){

    const [miniCar, setMiniCar] = useState([]);

    useEffect(()=>{
        const promise = api.getCarsRanking();
        promise.then( (res) => {
            setMiniCar(res.data);
        });
        
        promise.catch((err) => {
            alert(err.response.data);
        });
       
    }, [])
    

    return (
        <ContainerRanking>
                <h1>Ofertas mais visualizadas:</h1>
                <div>
                    {miniCar.map((car) => <MiniCardCar key={car.id} id={car.id} car={car} />)}
                </div>
        </ContainerRanking>
    );
}
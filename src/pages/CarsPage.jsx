import SearchInput from "../components/SearchInput";
import { IoSwapVertical } from "react-icons/io5";
import CarCard from "../components/CardCar";
import { ContainerPageCarros, ContainerProdutos, SecondHeader, StyledIcon } from "../styles/CarsPageStyle";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";

export default function CarsPage(){
    
    const { filtro } = useParams();

    const [cars, setCars] = useState([]);
    
    useEffect(()=>{
        const promise = api.getCarsList();
         
        promise.then( (res) => {
            
            if(filtro){
                const filterList = res.data.filter( car => car.category == filtro);
                setCars(filterList);
            }
            else{
                setCars(res.data);
            }
            
        });
        
        promise.catch((err) => {
            alert(err.response.data);
        });
       
    }, []);

    return (
        <ContainerPageCarros> 
            <div>
                <Header />
                <SecondHeader>
                    <div>
                        <StyledIcon/>
                    </div>
                    <SearchInput />
                    <div className="last">
                        <IoSwapVertical />
                        <p>Ordenar por: {"Maior valor"}</p>

                    </div>
                </SecondHeader>
            </div>
            <ContainerProdutos>
                <h1>Carros usados e seminovos de todo o Brasil</h1>
                {cars.map((car) => <CarCard key={car.id} id={car.id} car={car} />)}
            </ContainerProdutos>
        </ContainerPageCarros>
    );  
}


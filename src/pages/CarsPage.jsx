import SearchInput from "../components/SearchInput";
import { IoSwapVertical } from "react-icons/io5";
import CarCard from "../components/CardCar";
import { ContainerPageCarros, ContainerProdutos, HeaderMain, SecondHeader, StyledIcon } from "../styles/CarsPageStyle";
import Header from "../components/Header";

export default function CarsPage(){

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
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />

            </ContainerProdutos>
        </ContainerPageCarros>
    );  
}


import SearchInput from "../components/SearchInput";
import CarCard from "../components/CardCar";
import { ContainerPageCarros, ContainerProdutos, SecondHeader, StyledIcon } from "../styles/CarsPageStyle";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";
import OrderList from "../components/Order";

export default function CarsPage({ cars, setCars }) {

    const { filtro } = useParams();
    const [carsList, setCarsList] = useState([]);
    const [order, setOrder] = useState();

    useEffect(() => {
        console.log(cars);

        const promise = api.getCarsList();
        promise.then((res) => {
            if (filtro) {
                const filterList = res.data.filter(car => car.category == filtro);
                setCars(filterList);
            }
            else {
                setCars(res.data);
                setCarsList(res.data);
                console.log(res.data);
            }
        });
        promise.catch((err) => {
            alert(err.response.data);
        });

    }, []);

    useEffect(() => {
        if (order === "Maior valor") {
            const sortedCars = [...cars].sort((a, b) => b.price - a.price);
            setCars(sortedCars);
        } else if (order === "Menor valor") {
            const sortedCars = [...cars].sort((a, b) => a.price - b.price);
            setCars(sortedCars);
        } else if (order === "Maior Quilometragem") {
            const sortedCars = [...cars].sort((a, b) => b.km - a.km);
            setCars(sortedCars);
        } else if (order === "Menor Quilometragem") {
            const sortedCars = [...cars].sort((a, b) => a.km - b.km);
            setCars(sortedCars);
        } else {
            setCars(carsList);
        }
    }, [order]);
    return (
        <ContainerPageCarros>
            <div>
                <Header/>
                <SecondHeader>
                    <div>
                        {/*<StyledIcon />*/}
                    </div>
                    <SearchInput setCars={setCars} />
                    <OrderList setOrder={setOrder} />
                </SecondHeader>
            </div>
            <ContainerProdutos>
                <h1>Carros usados e seminovos de todo o Brasil</h1>
                {cars.map((car) => <CarCard key={car.id} id={car.id} car={car} />)}
            </ContainerProdutos>
        </ContainerPageCarros>
    );
}


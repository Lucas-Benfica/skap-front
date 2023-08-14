import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarForm from "../components/CreateSale";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";
import api from "../services/api";
import { ContainerSale } from "../styles/SaleStyle";

export default function EditSale(){
    const {id} = useParams();
    const [car, setCar] = useState();

    useEffect(() => {
        const promise = api.getCarsById(id);
        promise.then((res) => {
            setCar(res.data);
            console.log(res.data);
        });
        promise.catch((err) => {
            alert(err.response.data);
        });
    }, []);

    return(
        <ContainerSale>
            <Header/>
            <CarForm car={car} edit={true} />
        </ContainerSale>
    );
}

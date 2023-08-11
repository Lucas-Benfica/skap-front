import { styled } from "styled-components";
import CarForm from "../components/CreateSale";
import Header from "../components/Header";
import { ContainerSale } from "../styles/SaleStyle";

export default function Sale(){

    return(
        <ContainerSale>
            <Header/>
            <CarForm />
        </ContainerSale>
    );
}

import { styled } from "styled-components";
import SearchInput from "../components/SearchInput";
import { SubmitButton } from "../styles/LoginStyle";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Ranking from "../components/RankingCars";
import Categories from "../components/Categories";
import { ContainerHome, SearchContainer } from "../styles/HomeStyles";
import { useEffect } from "react";


export default function HomePage({setCars}) {
    const navigate = useNavigate();

    return (
        <ContainerHome>
            <Header />

            <SearchContainer>
                <h1>Comprar carros</h1>
                <div>
                    <div>As melhores ofertas estão aqui!<br/>Anuncie o seu carro gratuitamente.</div>
                    <SubmitButton type="button" onClick={() => navigate("/carros")}>Ver todas as ofertas</SubmitButton>
                </div>
            </SearchContainer>

            <Categories />

            <Ranking />

        </ContainerHome>
    );
}


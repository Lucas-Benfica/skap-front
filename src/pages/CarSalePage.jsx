import { styled } from "styled-components";
import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import ImagesToSale from "../components/ImagesSale";
import { ContainerSale } from "../styles/SaleStyle";

import api from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ex = {
    name: "",
    description: "",
    year: "",
    city: "",
    state: "",
    brand: "",
    km: "",
    transmission: "",
    price: "",
    fuel: "",
    plate: "",
    color: "",
    motor: "",
    photos: [],
    seller: {
        name: "",
        email: "",
        phoneNumber: ""
    }
};

export default function CarSale() {
    const { id } = useParams();
    const [car, setCar] = useState(ex);
    const [isHeartActive, setIsHeartActive] = useState(false);
    const { auth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const promise = api.getCarsById(id);
        promise.then((res) => {
            setCar(res.data);
            if (auth) {
                const promise = api.isFavorite(res.data.id, auth);
                promise.then((res) => {
                    if (res.data.favoriteCar) {
                        setIsHeartActive(true);
                    }
                });
                promise.catch((err) => {
                    alert(err.response.data);
                });
            }
        });
        promise.catch((err) => {
            alert(err.response.data);
        });
    }, [])

    

    return (
        <ContainerSale>
            <Header />
            <Body>
                <CardCarSale>
                    <ImagesToSale images={car.photos} id={car.id} isHeartActive={isHeartActive} setIsHeartActive={setIsHeartActive} />
                    <InfoDiv>
                        <InfoSection>
                            <div>
                                <InfoHeader>Modelo:</InfoHeader>
                                <InfoValue>{car.name}</InfoValue>
                            </div>
                            <div>
                                <InfoHeader>Endereço:</InfoHeader>
                                <InfoValue>{car.city + " - " + car.state}</InfoValue>
                            </div>
                        </InfoSection>
                        <InfoSection>
                            <div>
                                <InfoHeader>Marca:</InfoHeader>
                                <InfoValue>{car.brand}</InfoValue>
                            </div>
                            <div>
                                <InfoHeader>Cor:</InfoHeader>
                                <InfoValue>{car.color}</InfoValue>
                            </div>
                        </InfoSection>
                        <InfoSection>
                            <div>
                                <InfoHeader>Motor:</InfoHeader>
                                <InfoValue>{car.engine}</InfoValue>
                            </div>
                            <div>
                                <InfoHeader>Combustível:</InfoHeader>
                                <InfoValue>{car.fuel}</InfoValue>
                            </div>
                        </InfoSection>
                        <InfoSection>
                            <div>
                                <InfoHeader>Câmbio:</InfoHeader>
                                <InfoValue>{car.transmission}</InfoValue>
                            </div>
                            <div>
                                <InfoHeader>Placa:</InfoHeader>
                                <InfoValue>{car.plate}</InfoValue>
                            </div>
                        </InfoSection>
                        <InfoSection>
                            <div>
                                <InfoHeader>Ano:</InfoHeader>
                                <InfoValue>{car.year}</InfoValue>
                            </div>
                            <div>
                                <InfoHeader>Km:</InfoHeader>
                                <InfoValue>{car.km}</InfoValue>
                            </div>
                        </InfoSection>
                        <DescriptionSection>
                            <h1>Descrição</h1>
                            <DescriptionBox>{car.description}</DescriptionBox>
                        </DescriptionSection>
                        <ContactSection>
                            <ContactInfo>
                                <p>Vendedor</p>
                                <p>- Nome: {car.seller.name}</p>
                                <p>- Email: {car.seller.email}</p>
                                <p>- Telefone: {car.seller.phoneNumber}</p>
                            </ContactInfo>
                            <PriceSection>
                                <PriceValue>{"R$ " + car.price}</PriceValue>
                            </PriceSection>
                        </ContactSection>
                    </InfoDiv>
                </CardCarSale>
            </Body>
        </ContainerSale>
    );
}

const Body = styled.div`
    width: 100vw;
    height: 100vh;
`;
const CardCarSale = styled.div`
  width: 85%;
  height: 600px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin: 130px auto;
  display: flex;
`;
const InfoDiv = styled.div`
    width: 45%;
    height: 600px;
    border-radius: 0 8px 8px 0;
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 20px;
`;


const InfoSection = styled.div`
    display: flex;
    justify-content: space-between;
    div{
        width: 50%;
        display: flex;
        align-items: end;
        gap:10px;
    }
`;

const InfoHeader = styled.h2`
    font-size: 22px;
`;

const InfoValue = styled.p`
    font-size: 18px;
`;

const DescriptionSection = styled.div`
    margin-top: 20px;
    h1 {
        font-size: 18px;
        margin-bottom: 10px;
    }
`;

const DescriptionBox = styled.div`
    width: 100%;
    height: 80px;
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 10px;
`;

const ContactSection = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ContactInfo = styled.div`
    p {
        font-size: 18px;
        margin-bottom: 20px;
    }
    
`;

const PriceSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
`;

const PriceValue = styled.h2`
    font-size: 34px;
    text-align: center;
`;
import { styled } from "styled-components";
import React, { useState } from 'react';
import Header from "../components/Header";
import ImagesToSale from "../components/ImagesSale";
import { ContainerSale } from "../styles/SaleStyle";
import { AiFillHeart } from "react-icons/ai";

const car = {
    name: "HB20",
    description: "1.0 turbo, muito economico e potente",
    year: 2023,
    city: "Betim",
    state: "MG",
    brand: "Fiat",
    km: 50000,
    transmission: "Manual",
    price: 100000,
    fuel: "Flex",
    plate: "HBR6344",
    color: "vermelho",
    motor: "1.0 Turbo",
    images: ["https://s2-autoesporte.glbimg.com/IlvYaWV-ybEPQnrxCRkQ4ilvP8A=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/E/i/mi4AooTjyoZMf4AkbHGQ/updated-2016-hyundai-hb20-launched-in-brazil-1-liter-turbo-flex-announced-photo-gallery-21.jpg",
        "https://dezeroacem.com.br/wp-content/uploads/2020/05/Hyundai-HB20-Comfort-2017.jpg",
        "https://quatrorodas.abril.com.br/wp-content/uploads/2022/02/Hyundai-HB20-2023-1.jpg?quality=70&strip=info&w=1280&h=720&crop=1"
    ],
    vendedor: {
        name: "lucas soares benfica",
        email: "lucassoaresbenfica@gmail.com",
        phoneNumber: "31988668067"
    }
}

export default function CarSale() {

    const [isHeartActive, setIsHeartActive] = useState(false);

    const toggleHeart = () => {
        console.log(isHeartActive)
        setIsHeartActive(!isHeartActive);
    };

    return (
        <ContainerSale>
            <Header />
            <Body>
                <CardCarSale>
                    <ImagesToSale images={car.images} />
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
                                <InfoValue>{car.motor}</InfoValue>
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
                                <p>- Nome: {car.vendedor.name}</p>
                                <p>- Email: {car.vendedor.email}</p>
                                <p>- Telefone: {car.vendedor.phoneNumber}</p>
                                <div className="heart-icon" onClick={toggleHeart}>
                                    <AiFillHeart className={isHeartActive ? "active" : ""} />
                                </div>
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
        width: 250px;
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
    .heart-icon {
        margin-left: 10px;
        cursor: pointer;
        transition: color 0.3s;
    }

    .heart-icon .active {
        color: red;
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
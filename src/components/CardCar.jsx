import React, { useState } from 'react';
import { CardStyled, SecondDiv, ThirdDiv, UpperDiv, LowerDiv, InnerDiv, H1, H2, P } from '../styles/CardStyle';
import ImagesToCard from './ImagesCars';

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
  images: ["https://s2-autoesporte.glbimg.com/IlvYaWV-ybEPQnrxCRkQ4ilvP8A=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/E/i/mi4AooTjyoZMf4AkbHGQ/updated-2016-hyundai-hb20-launched-in-brazil-1-liter-turbo-flex-announced-photo-gallery-21.jpg",
    "https://dezeroacem.com.br/wp-content/uploads/2020/05/Hyundai-HB20-Comfort-2017.jpg",
    "https://quatrorodas.abril.com.br/wp-content/uploads/2022/02/Hyundai-HB20-2023-1.jpg?quality=70&strip=info&w=1280&h=720&crop=1"
  ]
}

export default function CarCard() {

  return (
    <CardStyled>
      <ImagesToCard images={car.images} />
      <SecondDiv>
        <UpperDiv>
          <InnerDiv>
            <div>
            <H1>{car.name}</H1>
            <H2>{car.description}</H2>
            </div>
          </InnerDiv>
          <InnerDiv>
            <P>{car.brand}</P>
          </InnerDiv>
          <InnerDiv>
            <P>{car.year}</P>
            <P>{car.km}</P>
          </InnerDiv>
        </UpperDiv>
        <LowerDiv>
            <P>{car.city} - {car.state}</P>
            <P>{car.transmission}</P>
        </LowerDiv>
      </SecondDiv>
      <ThirdDiv>
        <p>R$ {car.price}</p>
      </ThirdDiv>
    </CardStyled>
  );
}


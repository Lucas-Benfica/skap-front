import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardStyled, SecondDiv, ThirdDiv, UpperDiv, LowerDiv, InnerDiv, H1, H2, P } from '../styles/CardStyle';
import ImagesToCard from './ImagesCars';

export default function CarCard({car}) {
  const navigate = useNavigate();
  return (
    <CardStyled>
      <ImagesToCard images={car.photos} />
      <SecondDiv onClick={() => navigate(`/carros/${car.id}`)}>
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
            <P>{car.city + " - " + car.state}</P>
            <P>{car.transmission}</P>
        </LowerDiv>
      </SecondDiv>
      <ThirdDiv>
        <p>{"R$ " + car.price}</p>
      </ThirdDiv>
    </CardStyled>
  );
}


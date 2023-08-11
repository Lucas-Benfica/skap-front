import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ArrowButton, FirstImage } from "../styles/CardStyle";
import { styled } from "styled-components";


export default function ImagesToSale ({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <ImageBox>
            <ImageSaleCar src={images[currentImageIndex]} alt="Image" />
            <ArrowButton onClick={prevImage} style={{ left: '0' }}>
                <FiChevronLeft />
            </ArrowButton>
            <ArrowButton onClick={nextImage} style={{ right: '0' }}>
                <FiChevronRight />
            </ArrowButton>
        </ImageBox>
    );
}

export const ImageSaleCar = styled.img`
  width: 100%;
  object-fit: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);

`;

export const ImageBox = styled.div`
    width: 55%;
    height: 600px;
    padding: 28px;
    border-radius: 8px 0 0 8px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    background-color: #e1e0e0;
`
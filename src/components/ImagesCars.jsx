import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ArrowButton, FirstDiv, FirstImage } from "../styles/CardStyle";


export default function ImagesToCard ({ images }) {
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
        <FirstDiv>
            <FirstImage src={images[currentImageIndex]} alt="Image" />
            <ArrowButton onClick={prevImage} style={{ left: '0' }}>
                <FiChevronLeft />
            </ArrowButton>
            <ArrowButton onClick={nextImage} style={{ right: '0' }}>
                <FiChevronRight />
            </ArrowButton>
        </FirstDiv>
    );
}
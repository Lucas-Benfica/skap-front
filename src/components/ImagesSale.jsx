import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ArrowButton } from "../styles/CardStyle";
import { styled } from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import api from '../services/api';

export default function ImagesToSale({ images, id, isHeartActive, setIsHeartActive }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const { auth } = useAuth();
    const navigate = useNavigate();

    function toggleHeart(id) {
        if (!auth) {
            alert("Você precisa estar logado para adicionar aos favoritos.");
            navigate("/login");
            return;
        }
        if (!isHeartActive) {
            const promise = api.addFavorites(id, auth);
            promise.then((res) => {
                alert(res.data);
                setIsHeartActive(true);
            });
            promise.catch((err) => {
                alert(err.response.data);
            });
        }
        else if (isHeartActive) {
            const promise = api.removeFavorites(id, auth);
            promise.then((res) => {
                setIsHeartActive(false);
            });
            promise.catch((err) => {
                alert(err.response.data);
            });
        }
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
            <div className="heart-icon" onClick={() => toggleHeart(id)}>
                <AiFillHeart className={isHeartActive ? "active" : ""} />
            </div>
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
    position: relative;

    .heart-icon {
        cursor: pointer;
        transition: color 0.3s;
        position: absolute;
        right: 15px;
        top: 15px;
        font-size: 25px;
    }

    .heart-icon .active {
        color: red;
    }
`
import { CarContainer, IconsContainer, StyledIcon } from "../styles/CarsUsers";
import CarCard from "./CardCar";
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
import { useEffect, useState } from "react";
import api from "../services/api";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";


export default function CarList({ user }) {
    const { auth } = useAuth();
    const navigate = useNavigate();

    const handleEdit = (carId) => {
        navigate(`/editar/${carId}`);
    };

    const handleDelete = (carId) => {
        const promise = api.deleteSale(carId, auth);
        promise.then((res) => {
            alert(res.data);
            window.location.reload();
        });
        promise.catch((err) => {
            alert(err.response.data);
        });
    };

    const handleConfirm = (carId, carSold) => {
        if (!carSold) {
            const promise = api.processSale(carId, auth, 'confirm');
            promise.then((res) => {
                alert(res.data);
                window.location.reload();
            });
            promise.catch((err) => {
                alert(err.response.data);
            });
        }
        else if (carSold) {
            const promise = api.processSale(carId, auth, 'cancel');
            promise.then((res) => {
                alert(res.data);
                window.location.reload();
            });
            promise.catch((err) => {
                alert(err.response.data);
            });
        }
    };

    if (user.userSales == undefined) {
        return (
            <>
                <h1>Meus anúncios</h1>
            </>
        )
    }

    return (
        <>
            <h1>Meus anúncios</h1>
            {user.userSales.map((car) => (
                <CarContainer key={car.id}>
                    <CarCard id={car.id} car={car} />
                    <IconsContainer>
                        <StyledIcon >
                            <FaEdit onClick={() => handleEdit(car.id)} />
                        </StyledIcon>
                        <StyledIcon >
                            <FaTrash onClick={() => handleDelete(car.id)} />
                        </StyledIcon>
                        <StyledIcon>
                            {car.sold ? (
                                <FaCheck style={{ color: 'green' }} onClick={() => handleConfirm(car.id, car.sold)} />
                            ) : (
                                <FaCheck onClick={() => handleConfirm(car.id)} />
                            )}
                        </StyledIcon>
                    </IconsContainer>
                </CarContainer>
            ))}
        </>
    );
};

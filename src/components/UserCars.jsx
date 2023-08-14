import { useState } from "react";
import { List, Title } from "../styles/CarsUsers";
import CarCard from "./CardCar";
import CarList from "./UserCarList";

export default function DivCarsUser({ selectedOption, user }) {

    const [cars, setCars] = useState();

    

    return (
        <List>
            {(selectedOption === 'favoritos') ?
                (
                    <>
                        <Title>Favoritos</Title>
                        {user.favorites.map((car) => (<CarCard key={car.id} id={car.id} car={car} />))}
                    </>
                )
                :
                (
                    <CarList user={user} />
                )
            }
        </List>
    )
}

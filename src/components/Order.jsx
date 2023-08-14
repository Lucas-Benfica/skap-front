import { IoSwapVertical } from "react-icons/io5";
import { useState } from 'react';

export default function OrderList({setOrder}) {
    const [showSortOptions, setShowSortOptions] = useState(false); 
    const [selectedSort, setSelectedSort] = useState("Padrão"); 

    const handleSortClick = () => {
        setShowSortOptions(!showSortOptions);
    };

    const handleSortChange = (event) => {
        setSelectedSort(event.target.value);
        setOrder(event.target.value);
        setShowSortOptions(false);
    };

    return (
        <>
            <div className="last" onClick={handleSortClick}>
                <IoSwapVertical />
                <p>Ordenar por: {selectedSort}</p>
            </div>
            {showSortOptions && (
                <select onChange={handleSortChange} value={selectedSort}>
                    <option value="Padrão">Padrão</option>
                    <option value="Maior valor">Maior valor</option>
                    <option value="Menor valor">Menor valor</option>
                    <option value="Maior Quilometragem">Maior Quilometragem</option>
                    <option value="Menor Quilometragem">Menor Quilometragem</option>
                </select>
            )}
        </>
    );
}
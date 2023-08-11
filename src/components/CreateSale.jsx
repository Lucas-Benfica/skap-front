import React, { useState } from 'react';
import { SubmitButton } from '../styles/LoginStyle';
import { ButtonAddPhoto, FormCreateCar, InputWithButton } from '../styles/SaleStyle';

const statesList = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
  "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

export default function CarForm() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    city: "",
    state: "",
    year: "",
    km: "",
    transmission: "",
    fuel: "",
    color: "",
    price: "",
    photos: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddPhoto = () => {
    setFormData({ ...formData, photos: [...formData.photos, ""] });
  };

  const handleRemovePhoto = (indexToRemove) => {
    const updatedPhotos = formData.photos.filter((_, index) => index !== indexToRemove);
    setFormData({ ...formData, photos: updatedPhotos });
  };

  const handlePhotoChange = (event, indexToUpdate) => {
    const updatedPhotos = formData.photos.map((photo, index) =>
      index === indexToUpdate ? event.target.value : photo
    );
    setFormData({ ...formData, photos: updatedPhotos });
  };

  return (
    <FormCreateCar>
      <h1>Vamos começar seu anúncio?</h1>
      <form>
        <label>Modelo:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label>Marca:</label>
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
        />

        <label>Cidade:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />

        <label>Estado:</label>
        <select
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        >
          <option value="">Selecione o estado</option>
          {statesList.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>

        <label>Ano:</label>
        <input
          type="text"
          name="year"
          value={formData.year}
          onChange={handleInputChange}
        />

        <label>Quilometragem:</label>
        <input
          type="text"
          name="km"
          value={formData.km}
          onChange={handleInputChange}
        />

        <label>Câmbio:</label>
        <select
          name="transmission"
          value={formData.transmission}
          onChange={handleInputChange}
        >
          <option value="">Selecione o câmbio</option>
          <option value="manual">Manual</option>
          <option value="automatic">Automático</option>
        </select>

        <label>Combustível:</label>
        <select
          name="fuel"
          value={formData.fuel}
          onChange={handleInputChange}
        >
          <option value="">Selecione o Combustível</option>
          <option value="gasoline">Gasolina</option>
          <option value="ethanol">Etanol</option>
          <option value="flex">Flex</option>
        </select>

        <label>Cor:</label>
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleInputChange}
        />

        <label>Preço:</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />

        <label>Motor:</label>
        <input
          type="text"
          name="engine"
          value={formData.engine}
          onChange={handleInputChange}
        />

        <label>Placa:</label>
        <input
          type="text"
          name="plate"
          value={formData.plate}
          onChange={handleInputChange}
        />

        <label>Descrição:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows="4"
        ></textarea>

        <label>Fotos - Link para foto:</label>
        {formData.photos.map((photo, index) => (
          <div key={index}>
            <InputWithButton>
              <input
                type="text"
                value={photo}
                onChange={(event) => handlePhotoChange(event, index)}
              />
              <button type="button" onClick={() => handleRemovePhoto(index)}>Remover</button>
            </InputWithButton>
          </div>
        ))}
        <ButtonAddPhoto type="button" onClick={handleAddPhoto}>Adicionar Foto</ButtonAddPhoto>

        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormCreateCar>
  );
};

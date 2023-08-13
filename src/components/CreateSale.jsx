import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import api from '../services/api';
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
    category: "",
    city: "",
    state: "",
    year: "",
    km: "",
    transmission: "",
    engine: "",
    fuel: "",
    color: "",
    plate: "",
    price: "",
    photos: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

  const {auth} = useAuth();

  function submitCar(e){
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);
    const promise = api.createCar(formData, auth);
        promise.then(res => {
            setIsLoading(false);
            alert("Anúncio criado com sucesso.");
            navigate("/");
        });
        promise.catch(err => {
            setIsLoading(false);
            alert(err.response.data.message);
        });
  }

  return (
    <FormCreateCar onSubmit={submitCar}>
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
        <select
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
        >
          <option value="">Selecione a marca</option>
          <option value="Toyota">Toyota</option>
          <option value="Volkswagen">Volkswagen</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Ford">Ford</option>
          <option value="Honda">Honda</option>
          <option value="Nissan">Nissan</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Renault">Renault</option>
          <option value="Jeep">Jeep</option>
          <option value="Fiat">Fiat</option>
          <option value="Mitsubishi">Mitsubishi</option>
          <option value="Mercedes-Benz">Mercedes-Benz</option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="Tesla">Tesla</option>
        </select>

        <label>Categoria:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value="">Selecione a categoria</option>
          <option value="Hatches">Hatches</option>
          <option value="Sedans">Sedans</option>
          <option value="Picape">Picapes</option>
          <option value="SUV">SUVs</option>
          <option value="Eletrico">Elétricos</option>
        </select>

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
          <option value="automático">Automático</option>
        </select>

        <label>Combustível:</label>
        <select
          name="fuel"
          value={formData.fuel}
          onChange={handleInputChange}
        >
          <option value="">Selecione o Combustível</option>
          <option value="Gasolina">Gasolina</option>
          <option value="Etanol">Etanol</option>
          <option value="flex">Flex</option>
          <option value="Diesel">Diesel</option>
          <option value="Híbrido">Híbrido</option>
          <option value="Elétrico">Elétrico</option>
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

        <SubmitButton type="submit" disabled={isLoading}>Submit</SubmitButton>
      </form>
    </FormCreateCar>
  );
};

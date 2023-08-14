import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function SearchInput({setCars}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  };

  const performSearch = () => {
    setDisabled(true);
    const promise = api.getCarsSearch(searchTerm);
    promise.then((res) => {
      setCars(res.data);
      setDisabled(false);
      navigate("/carros");
    });
    promise.catch((err) => {
      alert(err.response.data);
      setDisabled(false);
  });
  };

  return (
    <SearchInputContainer>
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Digite a marca ou o modelo"
      />
      <SearchIcon onClick={performSearch} disabled={disabled} />
    </SearchInputContainer>
  );
}

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border-radius: 5px;
  padding: 8px;
  margin-right: 5px;
  border: 1px solid #ccc;
`;

const SearchIcon = styled(FiSearch)`
  cursor: pointer;
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

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

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  };

  const performSearch = () => {
    console.log('Busca realizada:', searchTerm);
    // Adicione a lógica de busca aqui
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
      <SearchIcon onClick={performSearch} />
    </SearchInputContainer>
  );
}

export default SearchInput;

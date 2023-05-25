import { useState } from "react";
import { getPokemonsByName } from "../redux/actions";
import { connect } from 'react-redux';

const mapDispatchToProps = {
    onSearch: getPokemonsByName
}

export const SearchBar = connect(null, mapDispatchToProps)(({ onSearch }) => {
    const [searchPokemonInput, setSearchPokemonInput] = useState('');

       // Manejo el cambio en el valor de entrada del usuario y actualizamos el estado local
  const handleInputChange = (event) => {
    setSearchPokemonInput(event.target.value);
  };

  // Maneja el envio del formulario y llama a la accion onSearch definida en mapDispatchToProps con la entrada de busqueda del usuario
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchPokemonInput).then((response) => {
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a Pokemon name"
        value={searchPokemonInput}
        onChange={handleInputChange}
        
      />
      <button type="submit">Search</button> 
    </form>
  );
});

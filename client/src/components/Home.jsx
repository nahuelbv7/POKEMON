import Card from "./Card"
import style from "../styles/Home.module.css"

export const Home = ({ pokemones }) => {
    return (
      <div className={style.container}>
        <div className={style.pokemons}> 
        {pokemones.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div></div>
    );
  }
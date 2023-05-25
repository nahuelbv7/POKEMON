import Card from "./Card";
import style from "../styles/Home.module.css";
import Paginate from "../components/Paginate"
import { useSelector } from "react-redux";


export const Home = ({ pokemones }) => {
  const {numPage} = useSelector((state) => state) 
  
  let init = (numPage-1) * 12
  let end = numPage * 12 

  let cantPage = Math.ceil(pokemones.length / 12);

  
  return (
    <div className={style.container}>
      <div className={style.pokemons}> 
        {pokemones.slice(init, end).map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div className={style.jhon}><Paginate cantPage={cantPage}></Paginate></div>
      </div>
      
  );
  }
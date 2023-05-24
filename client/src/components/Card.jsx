import style from "../styles/Card.module.css"
import { Link } from "react-router-dom";


const Card = ({pokemon}) => {
   
    let types = pokemon.types.map((t) => t.name);
    if (types.length === 2) {
    types = types.join(" - ");
    }

    return (
        <div className={style.card}>
            <img src={pokemon.image} alt={`Foto de ${pokemon.name}`}/> 
            <p>Name: {pokemon.name}</p>
            <p>Type: {types}</p> 
            <Link to={`/detail/${pokemon.id}`}>View Detail</Link>
        </div>
    )
}



export default Card
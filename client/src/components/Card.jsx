import style from "../styles/Card.module.css"
import { Link } from "react-router-dom";


const Card = ({pokemon}) => {
   
    let types = pokemon.types.map((t) => t.name);
    if (types.length === 2) {
    types = types.join(" -  ");
    }

    return (
        <div className={style.card}>
            <div className={style.name}><p>{pokemon.name}</p></div>
            <div className={style.img}><img src={pokemon.image} alt={`Foto de ${pokemon.name}`} className={style.tamaño}/> </div>
            
            <p className={style.p}>{types}</p> 

            <div className={style.detail}><Link to={`/detail/${pokemon.id}`} className={style.letra}>View Detail</Link></div>
        </div>
    )
}



export default Card
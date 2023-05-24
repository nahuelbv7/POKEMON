import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsById } from "../redux/actions";
import styles from "../styles/Detail.module.css"


export const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPokemonsById(id));
    }, [dispatch, id]);
    const pokemon = useSelector((state) =>  state.detail);
    
    let types;
     if(pokemon.length > 0) {
        types = pokemon[0].types.map((t) => t.name);
        types = types.join(" ");
    }


    return (
        <div>
            {pokemon.length > 0 && <div>
            <img src={pokemon[0].image} alt={pokemon[0].name} />
            <h1 className={styles.h11}>{pokemon[0].name}</h1>
            <h3 className={styles.h3}>Hp: {pokemon[0].hp}</h3>
            <h3 className={styles.h3}>Attack: {pokemon[0].attack}</h3>
            <h3 className={styles.h3}>Defense: {pokemon[0].defense}</h3>
            <h3 className={styles.h3}>Speed: {pokemon[0].speed}</h3>
            <h3 className={styles.h3}>Weight: {pokemon[0].weight}</h3>
            <h3 className={styles.h3}>Height :{pokemon[0].height}</h3> 
            <h3 className={styles.h3}>Types: {types}</h3>
         </div>}
        </div>
    );
};
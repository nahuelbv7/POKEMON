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
        types = types.join(" - ");
    }


    return (
        <div>
            {pokemon.length > 0 && <div>
            <div className={styles.img}><img src={pokemon[0].image} alt={pokemon[0].name} className={styles.imgsize} /></div>
            <h3 className={styles.type}>{types}</h3>
            <div className={styles.stats}>
            <h1 className={styles.h11}>{pokemon[0].name}</h1>
           <div className={styles.hw}> <h2 className={styles.h3}>Weight: {pokemon[0].weight}</h2>
            <h2 className={styles.h2}>Height :{pokemon[0].height}</h2> </div>
            <h3 className={styles.h3}>Hp: {pokemon[0].hp}</h3>
            <h3 className={styles.h3}>Attack: {pokemon[0].attack}</h3>
            <h3 className={styles.h3}>Defense: {pokemon[0].defense}</h3>
            <h3 className={styles.h3}>Speed: {pokemon[0].speed}</h3>
            
            </div>
         </div>}
        </div>
    );
};
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css"
import logo from "../images/logo.png"
import { getPokemons, getPokemonsByName} from "../redux/actions"
import { useDispatch } from "react-redux";
import { SearchBar } from "./SearchBar";
import React, { useState } from "react";


export const NavBar = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        dispatch(getPokemonsByName)
    }
    
    const handleDeleteSearch = () => {
        setSearch("");
        dispatch(getPokemons());
      };

    return (
        <nav className={styles.navbar}>
            <Link to="/home"><img src={logo} alt="Logo" className={styles.logo} /></Link> 
            <SearchBar onSearch={handleSearch} />
            <button className={styles.button} onClick={handleDeleteSearch}>Delete Search</button>
            <ul className={styles.navbarMenu}>
                <li className={styles.navbarItem}>
                    <Link to="/home" className={styles.h1}>Home</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link to="/create" className={styles.h1}>Create Pokemon</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link to="/about" className={styles.h1}>About</Link>
                </li>
            </ul>
        </nav>
    )
}
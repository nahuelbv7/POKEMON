import Card from "./Card";
import style from "../styles/Home.module.css";
import Paginate from "../components/Paginate"
import { useDispatch, useSelector } from "react-redux";
import { orderAz, filterAttack } from "../redux/actions";

export const Home = ({ pokemones }) => {
  const dispatch = useDispatch();

  const {numPage} = useSelector((state) => state) 
  
  let init = (numPage-1) * 12
  let end = numPage * 12 
  let cantPage = Math.ceil(pokemones.length / 12);

  
  const handleOrder = (e) => {
    const { value } = e.target;
    dispatch(orderAz(value));   
  };

  const attackFilter = (e) => {
    const { value } = e.target;
    dispatch(filterAttack(value));
  };

  
  return (
    <div>
       <select
          className={style.selector1}
          onChange={handleOrder}
          name="order"
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            A-Z Order
          </option>
          <option value="ascendent">Ascendent</option>
          <option value="descendent">Descendent</option>
        </select>
        <select
          className={style.selector1}
          onChange={attackFilter}
          name="pop"
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            Attack Stats
          </option>
          <option value="ascendent">High</option>
          <option value="descendent">Low</option>
        </select>
    <div className={style.container}>
      <div className={style.pokemons}> 
        {pokemones.slice(init, end).map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div className={style.jhon}><Paginate cantPage={cantPage}></Paginate></div>
      </div></div>
      
  );
  }
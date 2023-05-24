import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../redux/actions";
import style from "../styles/Paginate.module.css"


const Paginate = ({cantPage}) => {
    const { numPage } = useSelector((state) => state);
    const dispatch = useDispatch();
    
    function next() {
        dispatch(nextPage())
    }

    function prev() {
        dispatch(prevPage())
    }


    return (
        <div className={style.container} >
            { numPage > 1 ? 
                <div>  
                    <button onClick={prev} className={style.myButton}>PREV</button>
                </div>
                : null
            }
            <h3>{numPage}</h3>
            { numPage < cantPage ?
                <div>
                    <button onClick={next} className={style.myButton}>NEXT</button>
                </div>
                : null
            }
        </div>
    )
}

export default Paginate
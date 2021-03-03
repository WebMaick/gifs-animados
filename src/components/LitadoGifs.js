import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { CardGifs } from "./CardGifs";

import cargando from '../assets/loading.gif'

export const LitadoGifs = ({ category }) => {


    const state = useFetchGifs(category);
    
    const {data:gifs, loading} = state; 
    

    return (
        <div className="listadogifs__container">
            <h3>{category}</h3>
            {
                loading && <p className="loading"><img src={cargando} alt="loading"/></p>
            }

            <div className="listadogifs__cards">
                {
                    gifs.map((gif) => (
                        <CardGifs key={gif.id} {...gif}/>
                    ))
                }
            </div>
        </div>
    );
};
/* qqeTstWplCGA5CU1kApsPmszYO2ZU7Ij */

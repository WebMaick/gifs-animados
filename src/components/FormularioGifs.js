import React, { useState } from "react";

import PropTypes from "prop-types";

export const FormularioGifs = ({ setListaGifs }) => {
    const [inputValue, setInputValue] = useState("");

    /* ======= Evento de input =======*/
    const handleInputChange = (e) => {
        // [e.target.name] = e.target.value;
        setInputValue(e.target.value);
    };

    /* ======= Cuando se Envia el formulario para la busqueda =======*/
    const handleSubmit = (e) => {
        e.preventDefault();

        /* === Agregando a nuestro array principal === */
        setListaGifs((cat) => [inputValue,...cat]);

        /* === limpiando nuestro input === */
        setInputValue("");
    };

    return (
        <form className="form__gifs" onSubmit={handleSubmit}>
            <h2>Encuentra tus GiFs Animado</h2>
            <hr />
            <input
                //name="nombregif"
                type="text"
                placeholder="Ej. Goku, pokemon"
                autoFocus
                autoComplete="off"
                value={inputValue}
                onChange={handleInputChange}
            />

            {/* <button type="submit">Buscar...</button> */}
        </form>
    );
};

FormularioGifs.propTypes = {
    setListaGifs: PropTypes.func.isRequired,
};

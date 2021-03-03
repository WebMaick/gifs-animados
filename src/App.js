import React, { useState } from "react";
import { FormularioGifs } from "./components/FormularioGifs";
import { LitadoGifs } from "./components/LitadoGifs";

function App() {
    const initialGifs = ['One Punch'];

    const [listaGifs, setListaGifs] = useState(initialGifs);

    return (
        <div className="gifs__container">
            <div className="gifs__content">
                <FormularioGifs setListaGifs={setListaGifs} />

                <ol>
                    <h2 className="animate__animated animate__backInDown">TUS GIFs ANIMADOS</h2>
                    {
                        listaGifs.map((category) =>(
                            <LitadoGifs key={category} category={category} />
                        ))
                    }
                </ol>
            </div>
        </div>
    );
}

export default App;

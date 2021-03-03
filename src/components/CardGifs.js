import React from "react";

export const CardGifs = ({title,url}) => {
    
    return (
        <div className="carfGif animate__animated animate__backInLeft">
            <img src={url} alt={title} />
            <h3>{title}</h3>
        </div>
    );
};

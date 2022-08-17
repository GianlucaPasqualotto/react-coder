import React from "react";
import { useState, useEffect } from "react";

function UserForm() {
const [userData, setUserData] = useState({
    name: "",
    email: "",
    telefono: "",
});
}    
function handleSubmit(evt){
        evt.preventDefault();
        console.log("submit");
    }

function inputChangeHandler(evt) {
const input = evt.target;
}

return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>

            <div className="form-item">
                <label htmlFor="name">Telefono</label>
                <input onChange={ inputChangeHandler } name="telefono" type="text" placeholder="Teléfono"></input>
            </div>

            <div className="form-item">
                <label htmlFor="email">Email</label>
                <input onChange={ inputChangeHandler } name="email" type="text" placeholder="Email"></input>
            </div>

            <div className="form-item">
                <label htmlFor="name">Nombre</label>
                <input onChange={ inputChangeHandler } name="name" type="text" placeholder="Nombre"></input>
            </div>

            <button type="submit">Enviar</button>
            <button type="reset">Cancelar</button>
        </form>
    </div>
)
import React, { useState } from 'react'

const Formulario1 = () => {

    const [nombre, setNombre] = useState("")
    const [edad, setEdad] = useState("")

    const validar = (event) => {
        //capturar el evento submit del formulario y evitar que la pagina se recargue
        event.preventDefault()
        console.log("pulsado el boton")
        //trim evalua si hay cadena de caracteres
        if (!nombre.trim()) {
            console.log("El nombre esta vacio")
            return
        }
        if (!edad.trim()) {
            console.log("La edad esta vacia")
            return
        }
    }
    return (
        <div className="container">
            <form onSubmit={validar} className="form-groups">

                <input
                    placeholder=" Introduce el nombre"
                    className="form-control mb-3"
                    type="text"
                    //Recibe un evento que es le evento del input 
                    //y dentro de esta funcion 
                    //Se recoge en valor del input y lo setea dentro de la constante el estado
                    //target una referencia al objeto en el cual se lanzo el evento. 
                    onChange={(e) => { setNombre(e.target.value) }}//se recibe el valor del input
                />
                <input
                    placeholder=" Introduce la edad"
                    className="form-control mb-3"
                    //type="number"
                    type="text"
                    onChange={(e) => { setEdad(e.target.value) }} />
                <input className="btn btn-info btn-block mb-3" type="submit" />


            </form>
        </div>
    )
}

export default Formulario1
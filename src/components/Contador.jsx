import React, { Fragment, useState } from 'react'

const Contador = () => {
    //Ejecutar el método useState con el valor inicial de nuestro estado 
    //nos devuelve un array que tendrá el valor del estado y un método para 
    //actualizar el estado.
    //[] Esta característica se llama array destructuring 
    //y básicamente nos permite extraer los elementos de un array 
    //y crear variables directamente.

    //mediante useState se puede hacer que nuestro numero tenga cierta persistencia de 
    //nuestra aplicacion y se mantenga su estado
    //numero sera el valor del estado
    //con setNumero es una funcion que se utiliza para modificar el valor de numero
    const [numero, setNumero] = useState(0)
    const Aumentar = () => {

        setNumero(numero + 1)//va a tomar la variable numero y la va setear a + 1
    }

    const Reducir = () => {

        setNumero(numero - 1)
    }
    return (
        <Fragment>
            <h1> Cantidad de contador {numero}</h1>
            <button onClick={Aumentar}>Aumentar</button>
            <button onClick={Reducir}>Reducir</button>

        </Fragment>


    )
}

export default Contador;
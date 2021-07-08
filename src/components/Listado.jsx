
import React, { Fragment, useState } from 'react'

export const Listado = () => {

    //Numeros es la contante con la que nosotros podemos acceder al array

    const [numeros] = useState([1, 2, 3, 4, 5, 6, 7])
    return (
        <Fragment>
            <ul>
                {
                    //numeros es nuestro array de useState 
                    //map para mapear todo el array
                    numeros.map((item, index) =>

                        <li key={index}>{item}-{index}</li>


                    )
                }
            </ul>

        </Fragment>
    )
}

export default Listado;
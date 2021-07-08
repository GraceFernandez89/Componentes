// operador ternario

import React, { useState } from 'react'

export const Temperatura = () => {

    const [temperatura, setTemperatura] = useState(19)
    const Subir = () => {

        setTemperatura(temperatura + 1)

    }

    const Bajar = () => {

        setTemperatura(temperatura - 1)

    }
    return (
        <div className='container-fluid'>
            <h2>La temperatura es: {temperatura}</h2>
            <p>
                {
                    temperatura > 21 ? 'Hace calorcito' : 'Hace frio'
                }
            </p>

            <button className="btn btn-success btn-block" onClick={Subir}>Aumentar temperatura</button>
            <button className="btn btn-primary" onClick={Bajar}>Reducir temperatura</button>
        </div>
    )
}

export default Temperatura

import React from 'react'

const Hola = () => {
    //codigo javaScript
    let saludo = 'Hola como estas'

    return (
        <div>
            <h1>Primer componente {saludo}</h1>
            <h2>suma {1 + 2}</h2>
        </div>
    )
}
export default Hola;
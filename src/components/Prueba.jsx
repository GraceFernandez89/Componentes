import React from 'react'

const Prueba = () => {
    return (
        <div>
            <form action="/action_page.php">
                <label for="fname">First name: </label>
                <input type="text" id="fname" name="fname" value="John"></input>
            </form>
        </div>
    )
}

export default Prueba;
import React from 'react'

import { useHistory } from 'react-router-dom'

export default function Home() {
    const history = useHistory()

    const routeToForm = () => {
        history.push('/pizza')
    }

    return(
        <div className='home-page'>
            <h1>Lambda Eats</h1>
            <button onClick={routeToForm}>
                Pizza?
            </button>
        </div>
    )

}
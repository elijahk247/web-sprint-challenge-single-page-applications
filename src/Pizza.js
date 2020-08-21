import React from 'react'

export default function Pizza(props) {
    const {details} = props;
    return (
        <div className='pizza container'>
            <h2>{details.name}'s order.</h2>
            <p>Size: {details.size}</p>
            <p>Sauce: {details.sauce}</p>
            <p>Toppings: {details.toppings}</p>
            <p>Special Instructions: {details.specialInstructions}</p>
        {
            !! details.toppings && !! details.toppings.length &&
            <div>
                Toppings:
                <ul>
                    {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
                </ul>
            </div>
        }
        </div>
    )
}
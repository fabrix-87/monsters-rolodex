import React from 'react'

import './card.styles.css'

export const Card = (props) => (
    <div className='card-container'>
        <img alt={`monster ${props.monster.name}`} src={`https://robohash.org/${props.monster.id}?set=2&size=180x180`} />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)
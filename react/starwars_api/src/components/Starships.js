import React from 'react'

const Starships = ({info}) => {
    return (
        <div>
            Name: {info.name}<br/>
            Model: {info.model}<br/>
            Length: {info.length}<br/>
            Starship Class: {info.starship_class}<br/>
        </div>
    )
}
export default Starships
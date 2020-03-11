import React from 'react'

const Vehicles = ({info}) => {
    return (
        <div>
            Name: {info.name}<br/>
            Model: {info.model}<br/>
            Crew: {info.crew}<br/>
            Manufacturer: {info.manufacturer}<br/>
        </div>
    )
}
export default Vehicles
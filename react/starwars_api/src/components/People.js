import React from 'react'

const People = ({info}) => {
    return (
        <div>
            Name: {info.name}<br/>
            Height: {info.height}<br/>
            Mass: {info.mass}<br/>
            Birthyear: {info.birth_year}<br/>
        </div>
    )
}
export default People
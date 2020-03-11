import React from 'react'

const Species = ({info}) => {
    return (
        <div>
            Name: {info.name}<br/>
            Classification: {info.classification}<br/>
            Skin color: {info.skin_colors}<br/>
            Average height: {info.average_height}<br/>
        </div>
    )
}
export default Species
import React from 'react'

const Films = ({info}) => {
    return (
        <div>
            Episode: {info.episode_id}<br/>
            Director: {info.director}<br/>
            Release date: {info.release_date}<br/>
        </div>
    )
}
export default Films
import React from 'react'

const Gift = ({title, id, url}) => {
    return (
        <div>
            <h4>{title}</h4>
            <img src={url} />
        </div>
    )
}

export default Gift
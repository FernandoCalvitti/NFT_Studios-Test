import React from 'react'

// Item receives props from ItemList Component
const Item = ( { id, image, name } ) => {
    return (
        <div className="Item">
            <img alt={name} src={image}/>
            <small>{name}</small>
            <small>{id}</small>
        </div>
    )
}

export default Item

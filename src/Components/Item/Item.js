import React from 'react'

// Item receives props from ItemList Component
const Item = ( { id, image, name } ) => {
    return (
        <div className="Item col-3">
            <div className="card m-4">
                <div className="card-img-top">
                    <img alt={name} src={image}/>
                </div>
                <div className="card-body">
                    <small>{name}</small>
                    <small>{id}</small>

                </div>
            </div>
        </div>
    )
}

export default Item

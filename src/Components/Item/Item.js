import React from 'react'

// Item receives props from ItemList Component
const Item = ( { id, image, name } ) => {
    return (
        <div className="Item col-3">
            <div className="card m-4 p-4">
                <div className="container">
                    <img className="img-fluid" alt={name} src={image}/>
                </div>
                <div className="card-body">
                    <strong className="text">{name}</strong>
                </div>
            </div>
        </div>
    )
}

export default Item

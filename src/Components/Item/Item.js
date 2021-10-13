import React from 'react'

// Item receives props from ItemList Component
const Item = ( { image, name } ) => {
    return (
        <div className="Item col-md-3">
            <div className="m-4 p-4">
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

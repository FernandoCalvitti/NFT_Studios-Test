import React, { useState, useEffect } from 'react'
import Item from '../Item/Item'
import fetchApi from '../../API/apiCall'


//Component that contains items
const ItemList = () => {

    //Elements to render
    const [items, setItems] = useState([])

    //Fetch on the first render 
    useEffect(() => {        
        fetchApi().then(res => setItems(res.assets))
        console.log("rendered");
    },[])

    //Renders a component for every Item
    return (
        <div className="ItemList">
            {items.map(item => {
                return (
                    <Item 
                        id={item.id}
                        image={item.image_preview_url}
                        key={item.id}
                        name={item.name}
                    />
                )
            })}
        </div>
    )
}

export default ItemList

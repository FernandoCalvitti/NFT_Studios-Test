import React, { useState, useEffect } from 'react'
import Item from '../Item/Item'
import fetchApi from '../../API/apiCall'
import Spinner from '../Spinner/Spinner'


//Component that contains items
const ItemList = () => {

    //Elements to render
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    //Fetch on the first render 
    useEffect(() => {   
        setIsLoading(true)
        fetchApi().then(res => {
            setItems(res.assets)
            setIsLoading(false)  
        })
    }, [])

    //Renders a component for every Item
    return (
        <div>
            { isLoading ?
                <Spinner /> :
                <div className="container">
                    <div className="ItemList row">
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
                </div>
            }
        </div>
    )
}

export default ItemList

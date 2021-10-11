import React, { useState, useEffect } from 'react'
import Item from '../Item/Item'
import fetchApi from '../../API/apiCall'
import Spinner from '../Spinner/Spinner'


//Component that contains items
const ItemList = () => {

    //Elements to render
    const [items, setItems] = useState([])

    //Is loading
    const [isLoading, setIsLoading] = useState(false)

    //State for new blocks of images
    const [blocks, setBlocks] = useState(20)
    
    //Add more img to the list
    const loadMore = async (block) => {
        setIsLoading(true)
        block = blocks
        const res = await fetchApi(block)
            .then(setBlocks(blocks + 20))
            const moreItems = res.assets
        setItems([...items, ...moreItems])
        setIsLoading(false)
    }

    //Fetch on the first render 
    useEffect(() => {   
        setIsLoading(true)
        fetchApi(0).then(res => {
            setItems(res.assets)
            setIsLoading(false)
        })
    }, [])

    //Renders a component for every Item
    return (
        <div>
            <div>
                { isLoading ?
                    <Spinner /> :
                    <div >
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
                            {(isLoading && items.length !== 0) ? <Spinner /> : null}
                        </div>
                    </div>
                }
                                
            </div>
            <div className="btn btn-primary m-4" onClick={loadMore}>
                Mas imagenes
            </div>
        </div>
    )
}

export default ItemList

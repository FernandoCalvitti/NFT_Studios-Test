import React, { useRef } from 'react'
import Item from '../Item/Item'
import Spinner from '../Spinner/Spinner'
import useCallToApi from '../../hooks/useCallToApi'


//Component that contains items
const ItemList = () => {

    //Call to hook
    const { isLoading, loadMore, items } = useCallToApi()

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

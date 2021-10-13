import React from 'react'
import Item from '../Item/Item'
import Spinner from '../Spinner/Spinner'
import useCallToApi from '../../hooks/useCallToApi'


//Component that contains items
const ItemList = () => {

    //Call to hook
    const { blocks, isLoading, loadingMoreItems, loadMore, items } = useCallToApi()

    window.onscroll = function () {
        //Check if page has scrolled to bottom
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            //Time out to await and see spinner effect
            setTimeout(loadMore(),2500)            
        }
    }

    //Renders a component for every Item
    return (
            <div>
                { ( isLoading && blocks === 20) ? <Spinner /> :
                    <div className="container">
                        <div className="ItemList container-fluid row">
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
                }{
                    loadingMoreItems && <Spinner />
                }                         
            </div>
    )
}

export default ItemList

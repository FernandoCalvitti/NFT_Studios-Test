import { useEffect, useState } from 'react'
import fetchApi from '../API/apiCall'

// Hook to handle API call and reload of new items
const useCallToApi = () => {
    
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

    return { blocks, isLoading, loadMore, items}
}

export default useCallToApi
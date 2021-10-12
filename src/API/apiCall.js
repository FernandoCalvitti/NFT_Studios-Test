
// Api fetch function
const fetchApi = async (offset) => {
    // URL
    const URL = `https://api.opensea.io/api/v1/assets?asset_contract_address=0x9e1f3e8db4d1119894624632499eaed1e56d2b1d&format=json&limit=20&offset=${offset}&order_direction=desc&collection=pixelchain`

    return await fetch(URL)
        .then(res => res.json())
        .then(data => {
            return data
        })
}


export default fetchApi
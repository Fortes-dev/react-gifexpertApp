

export const apiRequest = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=15&api_key=KbcsTRoDPwjby0B7UAzhXrXlmgOQK29L`;

    const resp = await fetch( url );

    //data de data
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}
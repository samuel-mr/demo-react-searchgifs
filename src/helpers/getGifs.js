import PropTypes from 'prop-types'

export const getGifs = async (category) => {
    if(category == undefined){
        return []
    }
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=2&api_key=nOTHL9BUU5qHkbG5MjJQH2fDXvuJrkke`

    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs
}

getGifs.propTypes = {
    category: PropTypes.string.isRequired
}
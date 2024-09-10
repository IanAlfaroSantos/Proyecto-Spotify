const TOKEN = 'BQCUpq2ouboOT2h532iFEo9UM1Qz8E3MhflKYkQsGfOgKqCEgLbjMWkBoatyHr7a-ZKjsCN9XzCo1_1ccZ4wikrEh-3eK1QkDcfWlVeWmrYglXOsHNA'
const URL = 'https://api.spotify.com/v1'

const headers = {
    Authorization: `Bearer ${TOKEN}`
}

export const buscarArtistas = async (nombreArtista) => {
    const resp = await fetch(`${URL}/search?q=${nombreArtista}&type=artist`, { headers })
    const data = await resp.json()
    return data.artists.items.length > 0 ? data.artists.items[0] : null
}


export const getCancionesArtistas = async (artistaId) => {
    const resp = await fetch(`${URL}/artists/${artistaId}/top-tracks?market=US`, { headers })
    const data = await resp.json()
    return data.tracks
}

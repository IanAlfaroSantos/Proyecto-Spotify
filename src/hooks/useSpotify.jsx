import { useState } from 'react'
import { buscarArtistas, getCancionesArtistas } from '../services/spotify'

export const useSpotify = () => {
    const [canciones, setCanciones] = useState([])
    const [audio1, setAudio1] = useState(null)

    const buscarArtista = async (nombreArtista) => {
        const artistas = await buscarArtistas(nombreArtista)
        if (artistas) {
            const canciones = await getCancionesArtistas(artistas.id)
            setCanciones(canciones)
        }
    }

    const playCancion = (url) => {
        if (audio1) {
            audio1.pause()
        }
        const audio = new Audio(url)
        setAudio1(audio)
        audio.play()
    }

    return {
        buscarArtista,
        canciones,
        playCancion,
    }
}

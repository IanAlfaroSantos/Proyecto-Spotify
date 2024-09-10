import React from 'react'
import { BuscarArtista } from './BuscarArtista'
import { ListaCanciones } from './ListaCanciones'
import { useSpotify } from '../hooks/useSpotify'

export const SpotifyApp = () => {
    const { buscarArtista, canciones, playCancion } = useSpotify()

    return (
        <div style={{backgroundColor: 'black', minHeight: '100vh', color: 'white', padding: '20px'}}>
            <BuscarArtista buscarArtista={buscarArtista} />
            <ListaCanciones canciones={canciones} playCancion={playCancion} />
        </div>
    )
}

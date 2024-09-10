import React, { useEffect, useRef } from 'react'

export const IniciarAudio = ({ nombreCancion, url }) => {
    const audioRef = useRef()

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.src = url
            audioRef.current.load()
            audioRef.current.play()
        }
    }, [url])

    return (
        <div>
            <h3>{nombreCancion || 'Selecciona una cancion'}</h3>
            <audio ref={audioRef} controls />
        </div>
    )
}

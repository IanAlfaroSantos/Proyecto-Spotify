import React, { useRef, useImperativeHandle, forwardRef } from 'react';

export const IniciarAudio = forwardRef(({ nombreCancion, url }, ref) => {
    const audioRef = useRef();

    useImperativeHandle(ref, () => ({
        playAudio: (newUrl) => {
            if (audioRef.current && newUrl) {
                audioRef.current.src = newUrl;
                audioRef.current.play()
            }
        }
    }))

    return (
        <div>
            <h6>{nombreCancion || 'Selecciona una canción'}</h6>
            <audio ref={audioRef} controls />
        </div>
    )
})
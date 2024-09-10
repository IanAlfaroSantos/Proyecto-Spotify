import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { IniciarAudio } from './IniciarAudio'

export const ListaCanciones = ({ canciones }) => {
    const [cancion1, setCancion1] = useState(null)
    const [url1, setUrl1] = useState(null)

    const handlePlay = (cancion) => {
        setCancion1(cancion.name)
        setUrl1(cancion.preview_url)
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-10 text-center mb-4">
                    <div className="card mx-auto" style={{ width: '100%' }}>
                        <div className="card-body">
                            <h6 className="card-title">{cancion1}</h6>
                            <IniciarAudio nombreCancion={cancion1} url={url1} />
                        </div>
                    </div>
                </div>
                <div className="col-md-7 text-center">
                    <h1 className="mb-5 text-danger">Lista de canciones</h1>
                    <ul className="list-group">
                        {canciones.map((cancion) => (
                            <li className="list-group-item d-flex justify-content-between align-items-center bg-black text-light" key={cancion.id}>
                                <span className="fs-5 text-warning">{cancion.name}</span>
                                <button className="btn btn-sm btn-warning" onClick={() => handlePlay(cancion)}>
                                    <img src="https://i.ibb.co/rMVMtrb/play-removebg-preview.png" alt="Play" style={{ width: '30px', height: '30px' }}/>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )    
}
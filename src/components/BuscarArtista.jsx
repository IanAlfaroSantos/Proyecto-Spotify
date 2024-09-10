import React, { useState } from 'react'

export const BuscarArtista = ({ buscarArtista }) => {
    const [consultar, setConsultar] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        buscarArtista(consultar)
    }

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#000000' }}>
            <div className="container-fluid">
                <a className="navbar-brand text-white fs-1" href="https://open.spotify.com/intl-es">Spotify</a>
                <form className="d-flex" role="search" onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px' }}>
                    <input className="form-control me-2" type="search" placeholder="Buscar un artista" aria-label="Search" value={consultar} onChange={(e) => setConsultar(e.target.value)}
                    style={{borderRadius: '20px', padding: '10px 15px', marginRight: '10px', backgroundColor: '#282828', color: '#ffffff', fontSize: '16px'}}/>
                    <button className="btn" type="submit" style={{backgroundColor: 'white'}}>
                        <img src="https://i.ibb.co/4Wx2vLD/lupa.jpg" alt="Search Icon" style={{ width: '50px', height: '50px' }}/>
                    </button>
                </form>
            </div>
        </nav>
    )
    
}
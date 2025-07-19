const CLIENT_ID = '79c0ddea91354d12b7f67f33099a508a';
const CLIENT_SECRET = '667aea44dd224d3f8c95e0a3a9b0cb22';
let TOKEN = '';
let tokenExpiration = 0;

const API_URL = 'https://api.spotify.com/v1';
const AUTH_URL = 'https://accounts.spotify.com/api/token';

const obtenerToken = async () => {
    const url = AUTH_URL;
    const headers = {
        'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    const body = new URLSearchParams();
    body.append('grant_type', 'client_credentials');

    try {
        const resp = await fetch(url, {
            method: 'POST',
            headers,
            body
        })

        if (!resp.ok) {
            throw new Error(`Error al obtener el token: ${resp.statusText}`);
        }

        const data = await resp.json();

        TOKEN = data.access_token;
        tokenExpiration = Date.now() + (data.expires_in * 1000);
    } catch (error) {
        console.error('Error en la solicitud del token:', error);
    }
}

const obtenerTokenActualizado = async () => {
    if (!TOKEN || Date.now() >= tokenExpiration) {
        await obtenerToken();
    }
    return TOKEN;
}

export const buscarArtistas = async (nombreArtista) => {
    const token = await obtenerTokenActualizado();
    if (!token) return null;

    try {
        const resp = await fetch(`${API_URL}/search?q=${nombreArtista}&type=artist`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        if (!resp.ok) {
            throw new Error(`Error al buscar artistas: ${resp.statusText}`);
        }

        const data = await resp.json();
        return data.artists.items.length > 0 ? data.artists.items[0] : null;
    } catch (error) {
        console.error('Error en la solicitud:', error);
        return null;
    }
}

export const getCancionesArtistas = async (artistaId) => {
    const token = await obtenerTokenActualizado();
    if (!token) return [];

    try {
        const resp = await fetch(`${API_URL}/artists/${artistaId}/top-tracks?market=US`, {
            headers: { Authorization: `Bearer ${token}` }
        })

        if (!resp.ok) {
            throw new Error(`Error al obtener las canciones: ${resp.statusText}`);
        }

        const data = await resp.json();
        return data.tracks;
    } catch (error) {
        console.error('Error en la solicitud:', error);
        return [];
    }
}
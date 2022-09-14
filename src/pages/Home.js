import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useGifts } from '../hooks/useGifts';
import ListOfGifs from '../components/ListOfGifs'

const Home = () => {

    const [keyword, setKetword] = useState('');
    const [path, pushLocation] = useLocation();
    const [ gifs ] = useGifts();

    const handleSubmit = (event) => {
        event.preventDefault();
        pushLocation("/search/" + keyword)
    }

    const handleChange = (event) => {
        setKetword(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={keyword} onChange={handleChange} />
                <button>Buscar</button>
            </form>
            <h3>Populares</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Link to='/search/ecuador'>Ecuador</Link>
                <Link to='/search/colombia'>Colombia</Link>
                <Link to='/search/japon'>Japon</Link>
            </div>
            <h3>Ultimas busquedas</h3>
            <ListOfGifs gifs={gifs} />
        </div>
    )
}

export default Home
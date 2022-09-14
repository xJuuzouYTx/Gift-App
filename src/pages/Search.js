import React, { useState, useEffect } from 'react'
import ListOfGifs from '../components/ListOfGifs';
import { useGifts } from '../hooks/useGifts';

const Search = ({ params }) => {

    const { keyword } = params;
    const [gifs] = useGifts({keyword});

    return (
        <div>
            <ListOfGifs gifs={gifs} />
        </div>
    )
}

export default Search
import { useState, useEffect } from 'react';
import getGifts from '../services/getGifts';

export const useGifts = ({ keyword } = { keyword: null }) => {

    const [gifs, setGifs] = useState([]);

    const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "random";

    useEffect(() => {
        getGifts({ keyword: keywordToUse })
        .then(gifts => {
            setGifs(gifts)
            localStorage.setItem("lastKeyword", keyword);
        });
    }, [keyword])

    return [gifs];
}
const api_key = "mYpO49gBjDxsy9dgJMoKUFD4NDvp6P0q";

export default function getGifts({ keyword = "morty" } = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data = [] } = response;
            if (Array.isArray(data)) {
                const gifs = data.map(image => {
                    const { images, title, id } = image;
                    const { url } = image.images.downsized_medium;
                    return { title, id, url };
                })
                return gifs;
            }
        })
}
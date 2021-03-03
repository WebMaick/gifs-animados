
export const getGifsApi = async (category) => {
    // const url =
    //  `https://api.giphy.com/v1/gifs/search?api_key=qqeTstWplCGA5CU1kApsPmszYO2ZU7Ij&q=${encodeURI(categoriaGif)}&limit=10`;

     const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=qqeTstWplCGA5CU1kApsPmszYO2ZU7Ij`;

    const res = await fetch(url),
        dataGifs = await res.json(),
        { data } = dataGifs;

    const datoGifs = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url,
        };
    });

    return datoGifs;
};

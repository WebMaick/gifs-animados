import { useEffect, useState } from "react"
import { getGifsApi } from "../helpers/getGifsApi";


export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    })

    useEffect(() => {
        getGifsApi(category)
            .then((img)=>{
                console.log(img)
                setState({
                    data:img,
                    loading:false
                })
            })

     }, [category]);

    return state
}

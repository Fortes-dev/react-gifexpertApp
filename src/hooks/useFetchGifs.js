import { useEffect, useState } from "react"
import { apiRequest } from "../utils/getFetchGifs";


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {

        apiRequest(category).then(imgs => {
            setTimeout( () => {
                setState({
                    data: imgs,
                    loading: false,
                });
            }, 800);
            
        });

    }, []);


    return state; //{data:[], loading:true}

}
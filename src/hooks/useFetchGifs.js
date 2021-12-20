import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {                                                                
        getGifs(category)
            .then(imgs => {
                setTimeout(() => { //simulate delay
                    setState({
                        data: imgs,
                        loading: false
                    })
                }, 500) //medio minuto
            })
    }, [category])

    return state
}
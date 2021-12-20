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
                }, 300) //de menos de medio minuto porque las pruebas no pasan (time out)
            })
    }, [category])

    return state
}
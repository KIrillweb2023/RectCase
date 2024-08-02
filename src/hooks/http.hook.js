import { useCallback, useState } from "react";

export const useHttp = () => {
    const [loaded, setLoaded] = useState(false)

    const request = useCallback(async (url, id = "",  method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        setLoaded(true)
        
        try {
            const response = await fetch(`${url}/${id}`, {method, body, headers})

            if(!response.ok) throw new Error('Ошибка с сервером!')
            const data = await response.json()

            setLoaded(false)
            return data
        } catch (err) {
            console.log(err)
        }
    }, [])


    return {loaded, request}
}
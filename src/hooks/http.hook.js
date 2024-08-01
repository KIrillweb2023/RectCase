import { useCallback } from "react";

export const useHttp = () => {
    const request = useCallback(async (url, id = "",  method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        try {
            const response = await fetch(`${url}/${id}`, {method, body, headers})

            if(!response.ok) throw new Error('Ошибка с сервером!')
            const data = await response.json()

            return data
        } catch (err) {
            console.log(err)
        }
    }, [])


    return {request}
}
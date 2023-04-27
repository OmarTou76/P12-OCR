import { useEffect, useState } from "react"

export const useFetch = (id, section = "") => {
    const [data, setData] = useState({})
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        if (!id) return

        const fetchData = async () => {

            try {
                const response = await fetch(`http://localhost:3000/user/${id}${section ? "/" + section : ""}`)
                const dataSection = await response.json()
                setData(dataSection)
            } catch (error) {
                console.log('Error', error)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        setLoading(true)

        fetchData()
    }, [id, section])

    return [data, error, isLoading]
}
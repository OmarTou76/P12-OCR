import { useEffect, useState } from "react"
import mockedData from '../mock/data.json'

export const useFetch = (id, section = "") => {
    const [data, setData] = useState({})
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        if (!id) return

        const fetchData = async () => {

            try {
                let dataSection;
                if (id === 1) {
                    const sectionSelected = section || "user"
                    dataSection = mockedData[0][sectionSelected]
                } else {
                    const response = await fetch(`http://localhost:3000/user/${id}${section ? "/" + section : ""}`)
                    if (!response.ok) {
                        throw new Error('Invalid user id')
                    }
                    dataSection = await response.json().then(res => res.data)
                }
                setData(dataSection)
            } catch (error) {
                console.log(error)
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
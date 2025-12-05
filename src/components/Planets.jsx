import React, { useEffect } from "react";
import { Link, useActionData } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const Planets = () => {
    const api_url = "https://www.swapi.tech/api/planets/"
    const { store, dispatch } = useGlobalReducer()

    const getApiPlanet = async () => {

        try {
            const resp = await fetch(api_url)
            if (!resp.ok) {
                throw new Error(`Error retrieving character ${resp.status}`)
            }
            const data = await resp.json()
            const planetMovie = data.results
            dispatch({
                type: "setPlanets",
                payload: { planeta: planetMovie }
            });
        }
        catch (error) {
            console.error("Error finding the characters:", error)
        }
    }

    useEffect(() => {
        getApiPlanet()
    }, [])

    console.log(store.planet)

    return (
        <div>

        </div>
    )
}
export default Planets
import React, { useEffect } from "react";
import { Link, useActionData } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

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

    const addToFavorite = (item) => {
        dispatch({
            type: "setFavorites",
            payload: { ...item, type: "planet", diferentId:`planet-${item.uid}` }
        })
    }

    // console.log(store.planet)
    return (
        <div className="container card-container">
            {
                store.planet.map((item, index) =>
                    <ul key={index}>
                        <div className="card card-p" style={{ width: "18rem" }}>
                            <li>
                                <div>
                                    <img className="card-img-top card-image" src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${item.uid}.jpg`} alt="" />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title"> {item.name} </h4>
                                    <div className="card-button">
                                        <Link className="btn btn-outline-primary" to={"/planetDetails/" + item.uid}>Learn more! </Link>
                                        <button className="btn btn-outline-warning"
                                            onClick={() => addToFavorite(item)} type="button">
                                            <FontAwesomeIcon icon={
                                                store.favorites.some(favorito => favorito.diferentId === `planet-${item.uid}`) ?
                                                faSolidHeart
                                                :
                                                faHeartRegular
                                            } 
                                            /> </button>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </ul>
                )
            }
        </div>
    )
}
export default Planets
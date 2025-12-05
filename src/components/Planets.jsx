import React, { useEffect } from "react";
import { Link, useActionData } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

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

    const addToFavorite = (planetId) => {
        dispatch({
            type: "setFavorites",
            payload: planetId,
        })
    }

    // console.log(store.planet)
    return (
        <div className="card-container">
            {
                store.planet.map((item, index) =>
                    <ul key={index}>
                        <div className="card card-p" style={{ width: "18rem" }}>
                            <li>
                                <div>
                                    <img className="card-img-top card-image" src="https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/2.jpg" alt="" />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title"> {item.name} </h4>
                                    <div className="card-button">
                                        <Link className="btn btn-outline-primary" to={"/planetDetails/" + item.uid}>Learn more! </Link>
                                        <button className="btn btn-outline-warning"
                                            onClick={() => addToFavorite(item)} type="button">
                                            <FontAwesomeIcon icon={faHeartRegular} /> </button>
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
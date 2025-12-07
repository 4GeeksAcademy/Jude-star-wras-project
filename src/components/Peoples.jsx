import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";



const People = () => {
    const api_url = "https://www.swapi.tech/api/people/"
    const { store, dispatch } = useGlobalReducer()

    const getApiPeople = async () => {

        try {
            const response = await fetch(api_url)
            if (!response.ok) {
                throw new Error(`Error retrieving character ${response.status}`)
            }
            const data = await response.json()
            const movieCharacters = data.results
            dispatch({
                type: "get_people",
                payload: { personajes: movieCharacters }
            })
        }
        catch (error) {
            console.error("Error finding the characters:", error)
        }
    }

    useEffect(() => {
        getApiPeople()
    }, [])

    // console.log(store.character)

    const addToListFavorite = (item) => {

        dispatch({
            type: "setFavorites",
            payload: { ...item, type: "people", diferentId: `people-${item.uid}` }
        })
    }

    return (
        <div className="container card-container">
            {
                store.character.map((item, uid) =>
                    <ul key={uid} className="">
                        <div className="card card-p" style={{ width: "18rem" }} >
                            <li>
                                <div>
                                    <img className="card-img-top card-image"src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${item.uid}.jpg`} alt="" />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title"> {item.name} </h4>
                                    <div className="card-button">
                                        <Link className="btn btn-outline-primary" to={"/characterDetails/" + item.uid}>Learn more! </Link>
                                        <button className="btn btn-outline-warning"
                                            onClick={() => addToListFavorite(item)} type="button">
                                            <FontAwesomeIcon icon={
                                                store.favorites.some(favorito => favorito.diferentId === `people-${item.uid}`) ?
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

export default People
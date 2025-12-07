import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

const Vehicles = () => {

    const { store, dispatch } = useGlobalReducer()
    const api_url = "https://www.swapi.tech/api/vehicles/"

    const getApiVehicles = async () => {
        try {
            const resp = await fetch(api_url)
            if (!resp.ok) {
                throw new Error`Error retrieving character: ${resp.status}`
            }
            const data = await resp.json()
            const movieVehicles = data.results
            dispatch({
                type: "setVehicles",
                payload: { vehiculos: movieVehicles }
            })
        }
        catch (error) {
            console.error("Error finding the characters:", error)
        }
    }

    useEffect(() => {
        getApiVehicles()
    }, [])

     console.log(store.vehicles)

    const addToFavorite = (vehicle) => {
        dispatch({
            type: "setFavorites",
            payload: { ...vehicle, type: "vehiculo", diferentId: `vehiculo-${vehicle.uid}`
        }
    })
}


return (
    <div className="container card-container">
        {
            store.vehicles.map((item, uid) =>
                <ul key={uid} className="">
                    <div className="card card-p" style={{ width: "18rem" }} >
                        <li>
                            <div>
                                <img className="card-img-top card-image" src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${item.uid}.jpg`} alt="" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title"> {item.name} </h4>
                                <div className="card-button">
                                    <Link className="btn btn-outline-primary" to={"/characterDetails/" + item.uid}>Learn more! </Link>
                                    <button className="btn btn-outline-warning"
                                        onClick={() => addToFavorite(item)} type="button">
                                        <FontAwesomeIcon icon={
                                            store.favorites.some(favorito => favorito.diferentId === `vehicle-${item.uid}`) ?
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
export default Vehicles
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";



const PlanetDetails = () => {

    const { store } = useGlobalReducer();
    const api_url = "https://www.swapi.tech/api/planets/"

    const { uid } = useParams()
    const [detailPlanet, setDetailPLanet] = useState([])

    const getDetailsPlanet = async () => {
        const resp = await fetch(api_url + uid)
        const data = await resp.json()
        setDetailPLanet(data.result.properties)
    }

    useEffect(() => {
        getDetailsPlanet()
    }, [])

    console.log(detailPlanet)

    return (
        <div className="container-details">
            <div className="details-people-top">
                <img className="card-img-top card-image" src="https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/2.jpg" alt="" />
                <div className="details-people-description">
                    <h4>{detailPlanet.name}</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ipsam tempore voluptate earum
                        beatae eos, optio consequuntur ullam. Quidem excepturi aliquam fuga molestias eius voluptates
                        atque nostrum, consequatur quod quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum eligendi itaque ex illum,
                        fuga impedit consequatur quo earum aut modi neque eveniet nostrum? Tempora exercitationem voluptatem
                        excepturi modi perspiciatis.</p>
                </div>
            </div>
            <table className="table table-borderless table-detail">
                <thead className="t-head">
                    <tr>
                        <th>created</th>
                        <th> edited </th>
                        <th>climate</th>
                        <th>diameter</th>
                        <th>gravity</th>
                        <th>  population  </th>
                        <th>rotation_period</th>
                        <th>terrain</th>
                    </tr>
                </thead>
                <tbody className="t-body">
                    <tr>
                        <td> {detailPlanet.created} </td>
                        <td> {detailPlanet.edited} </td>
                        <td> {detailPlanet.climate} </td>
                        <td> {detailPlanet.diameter} </td>
                        <td> {detailPlanet.gravity} </td>
                        <td> {detailPlanet.population} </td>
                        <td> {detailPlanet.rotation_period} </td>
                        <td> {detailPlanet.terrain
                        } </td>

                    </tr>
                </tbody>
            </table>

            <p>{ }</p>
        </div>
    )
}
export default PlanetDetails
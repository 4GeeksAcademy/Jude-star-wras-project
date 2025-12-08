import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

 const VehicleDetails = () => {

const { store, dispatch } = useGlobalReducer()

 const api_url = "https://www.swapi.tech/api/vehicles/"

  const { uid } = useParams()

 const [ detailVehicle, setDetailVehicle ] = useState([])

 const getDetailVehicle = async () => {

    const resp = await fetch(api_url + uid )
    const data = await resp.json()
    setDetailVehicle(data.result.properties)
 }

 useEffect(()=>{
    getDetailVehicle()
 },[])

 console.log(detailVehicle)

    return(
        <div className="container-details">
            
            <div className="details-people-top">
                <img className="card-img-top card-image" src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${uid}.jpg`} alt="" />
                <div className="details-people-description">
                    <h4>{detailVehicle.name}</h4>
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
                        <th>consumables</th>
                        <th>cost-in-credits</th>
                        <th>manufacturer</th>
                        <th>  model  </th>
                        <th>passengers</th>
                        <th>vehicle-class</th>
                    </tr>
                </thead>
                <tbody className="t-body">
                    <tr>
                        <td> {detailVehicle.created} </td>
                        <td> {detailVehicle.edited} </td>
                        <td> {detailVehicle.consumables} </td>
                        <td> {detailVehicle.cost_in_credits} </td>
                        <td> {detailVehicle.manufacturer} </td>
                        <td> {detailVehicle.model} </td>
                        <td> {detailVehicle.passengers} </td>
                        <td> {detailVehicle.vehicle_class} </td>

                    </tr>
                </tbody>
            </table>
          
            <p>{ }</p>
        </div>
    )
}
export default VehicleDetails

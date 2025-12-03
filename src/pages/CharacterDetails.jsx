import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const CharacterDetails = () => {

    const api_url = "https://www.swapi.tech/api/people/"
    const { store } = useGlobalReducer();

    const { uid } = useParams()
    const [detailPeople, setDetailPeople] = useState([])


    const getInfoPeople = async () => {
        const resp = await fetch(api_url + uid)
        const data = await resp.json()
        setDetailPeople(data.result.properties)
    }
    useEffect(() => {
        getInfoPeople()
    }, [])

    console.log(detailPeople)

    return (
        <div className="container-details">
            <div className="details-people-top">
                <img className="card-img-top card-image" src="https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/2.jpg" alt="" />
                <div className="details-people-description">
                    <h4>{detailPeople.name}</h4>
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
                        <th>birth_year</th>
                        <th>gender</th>
                        <th>eye_color</th>
                        <th>  hair_color  </th>
                        <th>homeworld</th>
                        <th>skin_color</th>
                    </tr>
                </thead>
                <tbody className="t-body">
                    <tr>
                        <td> {detailPeople.created} </td>
                        <td> {detailPeople.edited} </td>
                        <td> {detailPeople.birth_year} </td>
                        <td> {detailPeople.gender} </td>
                        <td> {detailPeople.eye_color} </td>
                        <td> {detailPeople.hair_color} </td>
                        <td> {detailPeople.homeworld} </td>
                        <td> {detailPeople.skin_color} </td>

                    </tr>
                </tbody>
            </table>
          
            <p>{ }</p>
        </div>
    );
};

export default CharacterDetails;

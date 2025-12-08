import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import logo_starWars from "../assets/img/logo-starWars.png";


export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	const { favorites } = store;

	const { uid } = useParams()

	const deleteFavorites = (uid) => {

		dispatch({
			type: "removeFavoriteId",
			payload: uid,
		})
	}
	console.log(store.favorites)

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link className="p-3" to="/">
					<img className="logo-nav" src={logo_starWars} alt="" />
				</Link>
				<div className="ml-auto me-9 dropdown-navbar">
					<div className="dropdown">
						<a className="btn btn-primary dropdown-toggle p-9" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span>{favorites.length}</span>
						</a>

						<ul className="dropdown-menu">
							{
								favorites.map((value) =>
									<li key={value.diferentId} className="navbar-favorite" >
										<Link to={
											value.type === "people" ?
												`/characterDetails/${value.uid}`
												:
												value.type === "planet" ?
													`/planetDetails/${value.uid}`
													:
													value.type === "vehiculo" ?
														`/vehicleDetails/${value.uid}`
														:
														"#"
										}>
											{value.name}
										</Link>
										<button className="button-trash" onClick={() => deleteFavorites(value.uid)} >   <FontAwesomeIcon icon={faTrash} />  </button>

									</li>
								)
							}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
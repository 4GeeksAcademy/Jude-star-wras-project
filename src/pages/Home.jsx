import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import People from "../components/Peoples.jsx";
import Planets from "../components/Planets.jsx";
import Vehicles from "../components/Vehicles.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div  >
			<div className="container card-contain">
				<h2 className="cha">Characters</h2>
				<People />
			</div>
			<div className="container">
				<h2 className="home-space">Planets</h2>
				<Planets />
			</div>
			<div className="container">
				<h2  className="home-space">Vehicles</h2>
				<Vehicles />
			</div>
		</div>
	);
}; 
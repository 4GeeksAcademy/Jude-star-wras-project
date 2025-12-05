import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import People from "../components/Peoples.jsx";
import Planets from "../components/Planets.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div  >
			<div className="card-contain">
				<h2>Characters</h2>
				<People />
			</div>
			<div>
				<Planets />
			</div>
		</div>
	);
}; 
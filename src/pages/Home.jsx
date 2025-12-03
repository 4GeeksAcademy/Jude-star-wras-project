import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import People from "../components/Peoples.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="card-container" >
			<div className="card-contain">
				<h2>Characters</h2>
				<People />
			</div>


		</div>
	);
}; 
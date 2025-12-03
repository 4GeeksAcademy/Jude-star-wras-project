import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					Star <br /> Wars
				</Link>
				<div className="ml-auto me-9">
					<div className="dropdown">
						<a className="btn btn-secondary dropdown-toggle p-9" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites 0
						</a>

						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Action mmmmmmmmmmmmmmmmmmmmmmmmllll</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
							<li><a className="dropdown-item" href="#">Action mmmmmmmmmmmmmmmmmmmmmmmmllll</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
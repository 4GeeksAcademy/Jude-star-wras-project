import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import Planets from "../components/Planets"



// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
            <Navbar />
            <Outlet />
            <Footer />
            {/* <div className="card-contain">
                <h2>Planets</h2>
                <Planets />
            </div> */}

        </ScrollToTop>
    )
}
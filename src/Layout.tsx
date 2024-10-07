// from my docs components
import { Outlet } from "react-router-dom";
import Footer from "./docs/Footer";
import Header from "./docs/Header";

function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;
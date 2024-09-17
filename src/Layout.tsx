// from my docs components
import Footer from "./docs/Footer";
import Header from "./docs/Header";

function Layout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;
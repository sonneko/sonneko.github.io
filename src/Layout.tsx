import { useContext } from "react";
import GlobalContext from "./global/globalContext";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

function Layout({ children, title }: { children: React.ReactNode, title: string }) {
    const contextData = useContext(GlobalContext);


    const device = contextData.userDevice;

    // return
    if (device == "tablet") {
        return (
            <>
                <DesktopLayout title={title}>
                    {children}
                </DesktopLayout>
            </>
        )
    } else if (device == "pc") {
        return (
            <>
                <DesktopLayout title={title}>
                    {children}
                </DesktopLayout>
            </>
        )
    } else if (device == "phone") {
        return (
            <>
                <MobileLayout title={title}>
                    {children}
                </MobileLayout>
            </>
        )
    }
}


export default Layout;
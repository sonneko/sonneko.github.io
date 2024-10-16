import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";


function Layout({ children, title }: { children: React.ReactNode, title: String }) {
    // 画面幅からデバイスを判定
    let device = window.matchMedia("(max-width: 768px)").matches ? "mobile" : "desktop";

    // return
    if (device == "desktop") {
        return (
            <>
                <DesktopLayout title={title}>
                    {children}
                </DesktopLayout>
            </>
        )
    } else if (device == "mobile") {
        return (
            <>
                <MobileLayout>
                    {children}
                </MobileLayout>
            </>
        )
    }
}


export default Layout;
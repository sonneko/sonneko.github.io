import { useContext, useEffect } from "react";
import GlobalContext from "./global/globalContext";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
import Error from "./components/mini/Error";
import { useNavigate } from "react-router-dom";

function Layout({ children, title }: { children: React.ReactNode, title: String }) {
    const contextData = useContext(GlobalContext);


    const navigate = useNavigate();

    const toNativeEle = document.getElementById("props-toNative");
    const toReactEle = document.getElementById("props-toReact");

    // 存在しない可能性をハンドリング
    if (toNativeEle == null || toReactEle == null) {
        return (
            <>
                <Error>props-toNativeもしくはprops-toReact要素が見つかりません。</Error>
            </>
        )
    }

    useEffect(() => {
        const message = toReactEle.innerText;
        if (message == 'requested-rootPage') {
            toNativeEle.innerText = 'rendering-finish';
        } else {
            // messageのさすpathに飛ぶ
            navigate(message);
        }
    });


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
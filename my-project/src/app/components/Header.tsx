"use client"
import { useEffect, useState } from "react"
import HeaderDesktop from "./Desktop/HeaderDesktop"
import HeaderMobile from "./Mobile/HeaderMobile"

export default function Header() {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
        </>
    );
}

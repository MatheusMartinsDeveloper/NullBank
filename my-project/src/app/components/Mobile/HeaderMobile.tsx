"use client"
import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

export default function HeaderMobile() {
    const [menuVisible, setMenuVisible] = useState<boolean>(false);

    const handleMenuVisible = () => {
        setMenuVisible(!menuVisible);
    }

    useEffect(() => {
        if (menuVisible) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [menuVisible]);

    return (
        <>
            <header className={`flex justify-around items-center bg-backgroundColor py-5 w-full`}>
                <div>
                    <h1 className="bg-gradient text-transparent bg-clip-text text-2xl font-Poppins font-semibold">Nullbank</h1>
                </div>
                <div>
                    <IoMdMenu onClick={handleMenuVisible} size={35} className="text-grayColorExtra cursor-pointer" />
                </div>
                
            </header>
            { menuVisible && (
                <div className={`fixed top-0 flex flex-col items-center bg-grayColorLight w-screen h-screen z-50`}>
                    <div className="flex justify-end p-5 w-full">
                        <IoMdClose onClick={handleMenuVisible} className="text-primaryColorMain text-5xl" />
                    </div>
                    <nav className="flex justify-center items-center w-full h-3/5">
                        <ul className="flex flex-col items-center gap-5">
                            <li>
                                <Link className="text-grayColorExtra text-xl font-Poppins font-medium" href={`#`}>O NullBank</Link>
                            </li>
                            <li>
                                <Link className="text-grayColorExtra text-xl font-Poppins font-medium" href={`#`}>Para Você</Link>
                            </li>
                            <li>
                                <Link className="text-grayColorExtra text-xl font-Poppins font-medium" href={`#`}>Perguntas</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
}
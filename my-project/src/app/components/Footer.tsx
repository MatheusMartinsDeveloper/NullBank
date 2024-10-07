import Link from "next/link";
import ButtonDownload from "./ButtonDownload";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex justify-center items-center gap-10 bg-primaryColorMain w-full h-[45vh]">
            <div className="flex justify-around w-[40%]">
                <h1 className="text-grayColorLight text-4xl font-Poppins font-semibold">NullBank</h1>
                <div className="flex ">
                    <div>
                        <h2 className="text-grayColorLight text-2xl font-Poppins font-semibold">NullBank</h2>
                        <nav>
                            <ul className="flex flex-col items-start gap-5">
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate" href={`#`}>Sobre</Link>
                                </li>
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate" href={`#`}>Blog</Link>
                                </li>
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate" href={`#`}>Comunidade</Link>
                                </li>
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate" href={`#`}>Investidores</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <h2 className="text-grayColorLight text-2xl font-Poppins font-semibold">Para você</h2>
                        <nav>
                            <ul className="flex flex-col items-start gap-5">
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate" href={`#`}>Cartões</Link>
                                </li>
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate" href={`#`}>Seguros</Link>
                                </li>
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate" href={`#`}>Pix</Link>
                                </li>
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate" href={`#`}>Empréstimos</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <h2 className="text-grayColorLight text-2xl font-Poppins font-semibold">Redes social</h2>
                        <nav>
                            <ul className="flex flex-col items-start gap-5">
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate" href={`#`}>Instagram</Link>
                                </li>
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate" href={`#`}>Facebook</Link>
                                </li>
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate" href={`#`}>Twitter</Link>
                                </li>
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate" href={`#`}>Linkedin</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div>
                <h2>Baixe o app</h2>
                <div>
                    <ButtonDownload
                        className=""
                        icon={<FaApple />} 
                        content="Apple Store"  
                    />
                    <ButtonDownload
                        className=""
                        icon={<FaGooglePlay />} 
                        content="Play Store"  
                    />
                </div>
            </div>
        </footer>
    );
}
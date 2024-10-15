import Link from "next/link";
import ButtonDownload from "./ButtonDownload";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex justify-center items-center gap-10 bg-primaryColorDark w-full h-[45vh] mobile:h-full mobile:flex-col mobile:py-14">
            <div className="flex justify-around w-[50%] mobile:flex-col mobile:justify-center mobile:items-center mobile:w-full mobile:gap-10">
                <h1 className="text-grayColorLight text-4xl font-Poppins font-semibold mobile:text-2xl">NullBank</h1>
                <div className="flex justify-around w-full mobile:grid mobile:grid-cols-2 mobile:gap-y-10">
                    <div className="flex flex-col gap-5 mobile:items-center">
                        <h2 className="text-grayColorLight text-2xl font-Poppins font-semibold mobile:text-xl">NullBank</h2>
                        <nav>
                            <ul className="flex flex-col items-start gap-5 mobile:items-center">
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate mobile:text-base" href={`#`}>Sobre</Link>
                                </li>
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate mobile:text-base" href={`#`}>Blog</Link>
                                </li>
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate mobile:text-base" href={`#`}>Comunidade</Link>
                                </li>
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate mobile:text-base" href={`#`}>Investidores</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-5 mobile:items-center">
                        <h2 className="text-grayColorLight text-2xl font-Poppins font-semibold mobile:text-xl">Para você</h2>
                        <nav>
                            <ul className="flex flex-col items-start gap-5 mobile:items-center">
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate mobile:text-base" href={`#`}>Cartões</Link>
                                </li>
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate mobile:text-base" href={`#`}>Seguros</Link>
                                </li>
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate mobile:text-base" href={`#`}>Pix</Link>
                                </li>
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate mobile:text-base" href={`#`}>Empréstimos</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-5 mobile:items-center">
                        <h2 className="text-grayColorLight text-2xl font-Poppins font-semibold mobile:text-xl">Redes social</h2>
                        <nav>
                            <ul className="flex flex-col items-start gap-5 mobile:items-center">
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate mobile:text-base" href={`#`}>Instagram</Link>
                                </li>
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate mobile:text-base" href={`#`}>Facebook</Link>
                                </li>
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate mobile:text-base" href={`#`}>Twitter</Link>
                                </li>
                                <li>
                                    <Link className="relative text-grayColorLight text-lg font-Poppins font-normal link-animate mobile:text-base" href={`#`}>Linkedin</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 w-[10%] mobile:justify-center mobile:items-center mobile:w-full">
                <h2 className="text-grayColorLight text-2xl font-Poppins font-semibold text-end">Baixe o app</h2>
                <div className="flex flex-col gap-5 w-full mobile:items-center">
                    <ButtonDownload
                        classNameLink="flex justify-center items-center gap-2 bg-grayColorLight rounded-md w-full h-[4em] delay-75 transition-all hover:scale-110 mobile:w-[70%]"
                        classNameSpan="text-grayColorExtra text-xs font-Poppins font-medium"
                        classNameSpanDown="text-grayColorExtra text-base font-Poppins font-semibold"
                        icon={<FaApple size={25} className="text-grayColorExtra" />} 
                        content="Apple Store"  
                    />
                    <ButtonDownload
                        classNameLink="flex justify-center items-center gap-2 bg-grayColorLight rounded-md w-full h-[4em] delay-75 transition-all hover:scale-110 mobile:w-[70%]"
                        classNameSpan="text-grayColorExtra text-xs font-Poppins font-medium"
                        classNameSpanDown="text-grayColorExtra text-base font-Poppins font-semibold"
                        icon={<FaGooglePlay size={25} className="text-grayColorExtra" />} 
                        content="Play Store"  
                    />
                </div>
            </div>
        </footer>
    );
}
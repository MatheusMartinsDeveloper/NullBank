import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
    return (
        <header className="flex justify-around items-center w-full">
            <div className="flex justify-center items-center gap-10 bg-backgroundColor py-6 w-[50%]">
                <h1 className="text-4xl font-Poppins font-semibold bg-gradient bg-clip-text text-transparent">Nullbank</h1>
                <nav>
                    <ul className="flex items-center gap-10">
                        <li>
                            <Link className="flex items-center gap-5 text-grayColorExtra text-base font-Poppins font-normal" href={`#`}>O NullBank <IoIosArrowDown size={20} /></Link>
                        </li>
                        <li>
                            <Link className="flex items-center gap-5 text-grayColorExtra text-base font-Poppins font-normal" href={`#`}>Para você <IoIosArrowDown size={20} /></Link>
                        </li>
                        <li>
                            <Link className="text-grayColorExtra text-base font-Poppins font-normal" href={`#`}>Perguntas</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex justify-center items-center bg-primaryColorMain py-6 w-[50%]">
                <Link className="bg-grayColorLight rounded-lg py-2 px-7 delay-75 transition-all hover:delay-75 hover:ease-in-out hover:scale-[110%]" href={`#`}>
                    <span className="text-base text-transparent uppercase font-Poppins font-medium bg-gradient bg-clip-text">Baixe o app</span>
                </Link>
            </div>
        </header>
    );
}
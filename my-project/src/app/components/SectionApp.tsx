import Image from "next/image"
import PhoneApp from "../../../public/images/phone-app.svg";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { RiExchangeBoxFill } from "react-icons/ri";
import CardSectionApp from "./CardSectionApp";

export default function SectionApp() {
    return (
        <section className="flex justify-around items-center bg-backgroundColor w-full h-[95vh]">
            <div className="relative">
                <Image className="z-0" data-aos="fade-up" src={PhoneApp} alt="Imagem Celular" quality={100} />
                <div className="flex justify-center items-center absolute top-44 -left-10 bg-primaryColorLight rounded-2xl w-[30%] h-[13%] animate-icon">
                    <IoShieldCheckmarkSharp size={40} className="text-primaryColorMain" />
                </div>
                <div className="flex justify-center items-center absolute top-72 -right-10 bg-primaryColorLight rounded-2xl w-[30%] h-[13%] animate-icon">
                    <FaClock size={40} className="text-primaryColorMain" />
                </div>
                <div className="flex justify-center items-center absolute top-[90%] -left-10 bg-primaryColorLight rounded-2xl w-[30%] h-[13%] animate-icon">
                    <RiExchangeBoxFill size={40} className="text-primaryColorMain" />
                </div>
            </div>
            <div className="flex flex-col items-start gap-10">
                <div className="space-y-2">
                    <span className="text-primaryColorMain text-base font-Poppins font-bold tracking-widest" data-aos="fade-up">App</span>
                    <h1 className="text-grayColorExtra text-4xl font-Poppins font-semibold" data-aos="fade-up">Faça tudo pelo app</h1>
                    <p className="text-grayColorDark text-base font-Poppins font-normal" data-aos="fade-up">Tudo o que você precisa, apenas um aplicativo. Crie uma conta, <br />
                    ative seu cartão e economize em tudo, desde mercearias até <br />
                    carros alugados.</p>
                </div>
                <div className="space-y-5 w-full">
                    <CardSectionApp icon={<IoShieldCheckmarkSharp size={40} className="text-primaryColorMain" />} />
                    <CardSectionApp icon={<FaClock size={40} className="text-primaryColorMain" />} />
                    <CardSectionApp icon={<RiExchangeBoxFill size={40} className="text-primaryColorMain" />} />
                </div>
            </div>
        </section>
    )
}
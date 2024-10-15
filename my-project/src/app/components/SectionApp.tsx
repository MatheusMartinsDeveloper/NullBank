import Image from "next/image"
import PhoneApp from "../../../public/images/phone-app.svg";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { RiExchangeBoxFill } from "react-icons/ri";
import CardSectionApp from "./CardSectionApp";

export default function SectionApp() {
    return (
        <section className="flex justify-around items-center bg-backgroundColor w-full h-[95vh] mobile:flex-col-reverse mobile:gap-10 mobile:h-screen">
            <div className="relative flex justify-center items-center w-1/2 mobile:flex mobile:justify-center mobile:items-center mobile:w-full">
                <Image className="z-0 mobile:w-[40%]" data-aos="fade-up" src={PhoneApp} alt="Imagem Celular" quality={100} />
                <div className="flex justify-center items-center absolute top-44 left-[30%] bg-primaryColorLight rounded-2xl w-[10%] h-[13%] animate-icon mobile:w-[17%] mobile:h-[17%] mobile:top-10 mobile:left-20">
                    <IoShieldCheckmarkSharp className="text-primaryColorMain text-5xl mobile:text-4xl" />
                </div>
                <div className="flex justify-center items-center absolute top-72 right-[30%] bg-primaryColorLight rounded-2xl w-[10%] h-[13%] animate-icon mobile:w-[17%] mobile:h-[17%] mobile:top-32 mobile:right-20">
                    <FaClock className="text-primaryColorMain text-5xl mobile:text-4xl" />
                </div>
                <div className="flex justify-center items-center absolute top-[90%] left-[30%] bg-primaryColorLight rounded-2xl w-[10%] h-[13%] animate-icon mobile:w-[17%] mobile:h-[17%] mobile:bottom-0 mobile:left-20">
                    <RiExchangeBoxFill className="text-primaryColorMain text-5xl mobile:text-4xl" />
                </div>
            </div>
            <div className="flex flex-col items-start gap-10 w-1/2 mobile:justify-center mobile:items-center mobile:w-full">
                <div className="space-y-2 mobile:flex mobile:flex-col mobile:justify-center mobile:items-center mobile:w-full">
                    <span className="text-primaryColorMain text-base font-Poppins font-bold tracking-widest" data-aos="fade-up">App</span>
                    <h1 className="text-grayColorExtra text-4xl font-Poppins font-semibold mobile:text-2xl mobile:text-center" data-aos="fade-up">Faça tudo pelo app</h1>
                    <p className="text-grayColorDark text-base font-Poppins font-normal w-[50%] mobile:text-sm mobile:text-center mobile:w-[90%]" data-aos="fade-up">Tudo o que você precisa, apenas um aplicativo. Crie uma conta,
                    ative seu cartão e economize em tudo, desde mercearias até
                    carros alugados.</p>
                </div>
                <div className="space-y-5 w-[80%] mobile:ml-10 mobile:w-full">
                    <CardSectionApp icon={<IoShieldCheckmarkSharp size={40} className="text-primaryColorMain" />} />
                    <CardSectionApp icon={<FaClock size={40} className="text-primaryColorMain" />} />
                    <CardSectionApp icon={<RiExchangeBoxFill size={40} className="text-primaryColorMain" />} />
                </div>
            </div>
        </section>
    )
}
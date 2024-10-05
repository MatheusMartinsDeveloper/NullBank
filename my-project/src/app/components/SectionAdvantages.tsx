import Advantages from "./Advantages";
import { FaGift } from "react-icons/fa6";
import { BsCash } from "react-icons/bs";
import { TbPercentage } from "react-icons/tb";

export default function SectionAdvantages() {
    return (
        <section className="flex justify-around items-center bg-backgroundColor w-full h-[70vh]">
            <div className="flex flex-col items-start gap-5">
                <span className="text-primaryColorMain text-base font-Poppins font-bold tracking-widest">cartões</span>
                <h1 className="text-grayColorExtra text-4xl font-Poppins font-semibold">Descubra as vantagens <br /> dos nossos Cartões </h1>
                <Advantages icon={<FaGift size={45} className="text-primaryColorMain" />} advantage="Recompensas" />
                <Advantages icon={<BsCash size={45} className="text-primaryColorMain" />} advantage="Cashback" />
                <Advantages icon={<TbPercentage size={55} className="text-primaryColorMain" />} advantage="Descontos" />
            </div>
            <div>
                <div className="block bg-gradient rounded-lg w-[15em] h-[10em]"></div>
                <div className="block bg-gradient rounded-lg w-[15em] h-[10em]"></div>
            </div>
        </section>
    )
}
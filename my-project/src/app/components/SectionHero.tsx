import Image from "next/image";
import Link from "next/link";
import CardFront from "../../../public/images/card-front.svg";
import CardBack from "../../../public/images/card-back.svg";

export default function SectionHero() {
    return(
        <section className="flex justify-between w-full h-[93vh] mobile:flex-col mobile:items-center">
            <div className="flex justify-center items-center bg-backgroundColor w-full h-full" data-aos="fade-up">
                <div className="flex flex-col items-start gap-5 mobile:items-center">
                    <h1 className="text-grayColorExtra text-5xl leading-snug font-Poppins font-semibold mobile:text-2xl mobile:text-center">Banco <span className="text-primaryColorMain">100% digital</span> e <br /> com tarifas <span className="text-primaryColorMain">nulas</span></h1>
                    <p className="text-grayColorDark text-base font-Poppins font-normal mobile:text-sm mobile:text-center">O banco digital que oferece serviços financeiros sem <br />
                    complicações e tarifas. Mantenha suas finanças sob <br />
                    controle com segurança e agilidade. </p>
                    <Link className="bg-gradient rounded-lg py-2 px-7 delay-75 transition-all hover:delay-75 hover:ease-in-out hover:scale-[110%]" href={`#`}>
                        <span className="text-grayColorLight text-base uppercase font-Poppins font-medium">Baixe o app</span>
                    </Link>
                </div>
            </div>
            <div className="relative flex justify-center items-center bg-primaryColorDark w-full h-full mobile:bg-backgroundColor">
                <div>
                    <Image className="absolute top-56 left-36 z-40 animate-bounce-y mobile:top-0 mobile:left-20 mobile:w-[60%]" src={CardFront} alt="Imagem Cartão" quality={100} />
                    <Image className="absolute top-80 left-[25%] z-0 animate-bounce-x mobile:top-24 mobile:left-20 mobile:w-[60%]" src={CardBack} alt="Imagem Cartão" quality={100} />
                </div>
            </div>
        </section>
    );
}
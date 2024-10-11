import Image from "next/image"
import ButtonDownload from "./ButtonDownload"
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import PhoneDownload from "../../../public/images/phone-download.svg";

export default function SectionDownload() {
    return (
        <section className="flex justify-around items-center bg-backgroundColor w-full h-[95vh]">
            <div className="flex flex-col gap-10">
                <div className="space-y-2">
                    <span className="text-primaryColorMain text-base font-Poppins font-bold tracking-widest" data-aos="fade-up">Download</span>
                    <h1 className="text-grayColorExtra text-4xl font-Poppins font-semibold" data-aos="fade-up">Baixe o NullBank agora</h1>
                    <p className="text-grayColorDark text-base font-Poppins font-normal" data-aos="fade-up">Baixe agora o aplicativo NullBank e tenha acesso a uma nova forma de <br />
                    gerenciar suas finanças de maneira rápida, segura e conveniente. <br />
                    Realize transações, acesse suas contas e tire proveito de vantagens <br />
                    exclusivas. </p>
                </div>
                <div className="flex justify-start items-center gap-5 w-[80%]" data-aos="fade-up">
                    <ButtonDownload
                        classNameLink="flex justify-center items-center gap-2 bg-gradient rounded-md w-full h-[4em] delay-75 transition-all hover:scale-110" 
                        classNameSpan="text-grayColorLight text-xs font-Poppins font-medium"
                        classNameSpanDown="text-grayColorLight text-base font-Poppins font-semibold"
                        icon={<FaApple size={25} className="text-grayColorLight" />} 
                        content="Apple Store" 
                    />
                    <ButtonDownload 
                        classNameLink="flex justify-center items-center gap-2 bg-gradient rounded-md w-full h-[4em] delay-75 transition-all hover:scale-110"
                        classNameSpan="text-grayColorLight text-xs font-Poppins font-medium"
                        classNameSpanDown="text-grayColorLight text-base font-Poppins font-semibold"
                        icon={<FaGooglePlay size={25} className="text-grayColorLight" />} 
                        content="Play Store" 
                    />
                </div>
            </div>
            <div>
                <Image data-aos="fade-up"
                    src={PhoneDownload} 
                    alt="Imagem Celular Download" 
                    quality={100} 
                />
            </div>
        </section>
    )
}
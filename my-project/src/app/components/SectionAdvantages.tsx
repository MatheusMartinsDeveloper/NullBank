import CardAdvantages from "./CardAdvantages";
import { FaPix } from "react-icons/fa6";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa6";
import { RiExchangeBoxFill } from "react-icons/ri";
import { FaClock } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";

export default function SectionAdvantages() {
    return (
        <section className="relative flex justify-around bg-backgroundColor w-full h-[95vh]">
            <div className="flex flex-col gap-10">
                <div>
                    <span className="text-primaryColorMain text-base font-Poppins font-bold tracking-widest" data-aos="fade-up">vantagens</span>
                    <h1 className="text-grayColorExtra text-4xl font-Poppins font-semibold" data-aos="fade-up">Quais as vantagens de <br /> usar NullBank? </h1>
                </div>
                <div className="grid grid-cols-3 place-items-end gap-10">
                    <div className="space-y-10">
                        <CardAdvantages
                            icon={<FaPix size={40} className="text-primaryColorMain" />}
                            advantage="Pix"
                            description={<>Transações rápidas e seguras <br /> com o Pix através do NullBank</>}
                        />
                        <CardAdvantages
                            icon={<IoShieldCheckmarkSharp size={40} className="text-primaryColorMain" />}
                            advantage="Segurança"
                            description={<>Proteção avançada de <br /> informações financeiras</>}
                        />
                        <CardAdvantages
                            icon={<FaCreditCard size={40} className="text-primaryColorMain" />}
                            advantage="Cartão"
                            description={<>Compre com Liberdade e <br /> Aproveite Vantagens <br /> Exclusivas.</>}
                        />
                    </div>
                    <div className="space-y-10">
                        <CardAdvantages
                            icon={<RiExchangeBoxFill size={40} className="text-primaryColorMain" />}
                            advantage="Transação"
                            description={<>Realize Transações Rápidas e <br /> Convenientes com o NullBank.</>}
                        />
                        <CardAdvantages
                            icon={<FaClock size={40} className="text-primaryColorMain" />}
                            advantage="Velocidade"
                            description={<>Interface clara e intuitiva para <br /> gerenciar suas finanças.</>}
                        />
                    </div>
                    <div>
                        <CardAdvantages
                            icon={<FaUserTie size={40} className="text-primaryColorMain" />}
                            advantage="Disponibilidade"
                            description={<>serviços bancários em <br /> horários e locais convenientes <br /> para os clientes.</>}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="text-primaryColorMain text-[15em] font-Poppins font-bold absolute left-[50%] z-50" data-aos="fade-right">Null</h1>
                </div>
            </div>
        </section>
    )
}
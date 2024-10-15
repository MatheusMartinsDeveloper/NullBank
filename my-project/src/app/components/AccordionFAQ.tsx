"use client"
import { useState } from "react";
import { Accordion, AccordionTab, AccordionTabChangeEvent } from "primereact/accordion"
import { FaArrowDown } from "react-icons/fa"

export default function AccordionFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleActiveIndex = (e: AccordionTabChangeEvent) => {
        if (typeof e.index === "number") {
            setActiveIndex(activeIndex === e.index ? null : e.index);
        } else if (Array.isArray(e.index)) {
            setActiveIndex(e.index.length > 0 ? e.index[0] : null);
        }
    };

    return (
        <Accordion 
            activeIndex={activeIndex} 
            onTabChange={handleActiveIndex} 
            onTabClose={handleActiveIndex} 
            expandIcon 
            collapseIcon 
            className="space-y-10 w-full" data-aos="fade-up">
            <AccordionTab contentClassName="border-b-[1.5px] border-primaryColorMain"
            header={
                <div className="flex justify-between items-center px-5 pb-5 w-full group">
                    <span className="text-grayColorExtra text-xl font-Poppins font-semibold mobile:text-base">O que é o NullBank?</span>
                    <FaArrowDown className={`text-primaryColorMain text-xl opacity-50 group-hover:opacity-100 transition-all delay-75 ${activeIndex === 0 ? `transition-all delay-75 rotate-180` : ``} mobile:text-base`} />
                </div>
            }>
                <p className="text-grayColorDark text-base font-Poppins font-normal px-5 pb-5 w-full mobile:text-sm"
                >O NullBank é um banco digital que oferece aos seus clientes uma
                forma conveniente e segura de gerenciar suas finanças.</p>
            </AccordionTab>
            <AccordionTab contentClassName="border-b-[1.5px] border-primaryColorMain"
            header={
                <div className="flex justify-between items-center px-5 pb-5 w-full group">
                    <span className="text-grayColorExtra text-xl font-Poppins font-semibold mobile:text-base">Posso acessar minhas contas a qualquer momento?</span>
                    <FaArrowDown className={`text-primaryColorMain text-xl opacity-50 group-hover:opacity-100 transition-all delay-75 ${activeIndex === 1 ? `transition-all delay-75 rotate-180` : ``} mobile:text-base`} />
                </div>
            }>
                <p className="text-grayColorDark text-base font-Poppins font-normal px-5 pb-5 w-full mobile:text-sm"
                >Sim, você pode acessar suas contas a qualquer momento através do
              aplicativo NullBank.</p>
            </AccordionTab>
            <AccordionTab contentClassName="border-b-[1.5px] border-primaryColorMain"
            header={
                <div className="flex justify-between items-center px-5 pb-5 w-full group">
                    <span className="text-grayColorExtra text-xl font-Poppins font-semibold mobile:text-base">É seguro usar o NullBank?</span>
                    <FaArrowDown className={`text-primaryColorMain text-xl opacity-50 group-hover:opacity-100 transition-all delay-75 ${activeIndex === 2 ? `transition-all delay-75 rotate-180` : ``} mobile:text-base`} />
                </div>
            }>
                <p className="text-grayColorDark text-base font-Poppins font-normal px-5 pb-5 w-full mobile:text-sm"
                >Sim, o NullBank tem medidas de segurança avançadas para proteger
                as informações financeiras dos seus clientes.</p>
            </AccordionTab>
            <AccordionTab contentClassName="border-b-[1.5px] border-primaryColorMain"
            header={
                <div className="flex justify-between items-center px-5 pb-5 w-full group">
                    <span className="text-grayColorExtra text-xl font-Poppins font-semibold mobile:text-base">Posso usar o NullBank para fazer transações com o Pix?</span>
                    <FaArrowDown className={`text-primaryColorMain text-xl opacity-50 group-hover:opacity-100 transition-all delay-75 ${activeIndex === 3 ? `transition-all delay-75 rotate-180` : ``} mobile:text-base`} />
                </div>
            }>
                <p className="text-grayColorDark text-base font-Poppins font-normal px-5 pb-5 w-full mobile:text-sm"
                >Sim, o NullBank tem medidas de segurança avançadas para proteger
                as informações financeiras dos seus clientes.</p>
            </AccordionTab>
            <AccordionTab contentClassName="border-b-[1.5px] border-primaryColorMain"
            header={
                <div className="flex justify-between items-center px-5 pb-5 w-full group">
                    <span className="text-grayColorExtra text-xl font-Poppins font-semibold mobile:text-base">O NullBank tem taxas escondidas?</span>
                    <FaArrowDown className={`text-primaryColorMain text-xl opacity-50 group-hover:opacity-100 transition-all delay-75 ${activeIndex === 4 ? `transition-all delay-75 rotate-180` : ``} mobile:text-base`} />
                </div>
            }>
                <p className="text-grayColorDark text-base font-Poppins font-normal px-5 pb-5 w-full mobile:text-sm"
                >Não, o NullBank não tem taxas escondidas e oferece transparência
                financeira aos seus clientes.</p>
            </AccordionTab>
            <AccordionTab contentClassName="border-b-[1.5px] border-primaryColorMain"
            header={
                <div className="flex justify-between items-center px-5 pb-5 w-full group">
                    <span className="text-grayColorExtra text-xl font-Poppins font-semibold mobile:text-base">O NullBank possui aplicativo mobile?</span>
                    <FaArrowDown className={`text-primaryColorMain text-xl opacity-50 group-hover:opacity-100 transition-all delay-75 ${activeIndex === 5 ? `transition-all delay-75 rotate-180` : ``} mobile:text-base`} />
                </div>
            }>
                <p className="text-grayColorDark text-base font-Poppins font-normal px-5 pb-5 w-full mobile:text-sm"
                >Sim, o NullBank possui um aplicativo mobile para Android e iOS,
                que pode ser baixado gratuitamente na Google Play Store e na App
                Store.</p>
            </AccordionTab>
        </Accordion>
    )
}
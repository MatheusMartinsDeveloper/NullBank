import AccordionFAQ from "./AccordionFAQ";

export default function SectionFAQ() {
    return (
        <section className="flex justify-around items-center bg-backgroundColor w-full h-[95vh]">
            <div className="flex flex-col justify-start items-start h-full">
                <span className="text-primaryColorMain text-base font-Poppins font-bold tracking-widest">dúvidas</span>
                <h1 className="text-grayColorExtra text-4xl font-Poppins font-semibold">Perguntas <br /> Frequentes</h1>
            </div>
            <div className="flex justify-start items-start w-[35%] h-full">
                <AccordionFAQ />
            </div>
        </section>
    );
}
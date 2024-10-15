import AccordionFAQ from "./AccordionFAQ";

export default function SectionFAQ() {
    return (
        <section className="flex justify-around items-center bg-backgroundColor w-full h-[95vh] mobile:flex-col mobile:items-center mobile:pt-10 mobile:pb-20 mobile:h-screen">
            <div className="flex flex-col justify-start items-start h-full mobile:items-center">
                <span className="text-primaryColorMain text-base font-Poppins font-bold tracking-widest" data-aos="fade-up">dúvidas</span>
                <h1 className="text-grayColorExtra text-4xl font-Poppins font-semibold mobile:text-2xl mobile:text-center" data-aos="fade-up">Perguntas <br /> Frequentes</h1>
            </div>
            <div className="flex justify-start items-start w-[35%] h-full mobile:w-[90%]">
                <AccordionFAQ />
            </div>
        </section>
    );
}
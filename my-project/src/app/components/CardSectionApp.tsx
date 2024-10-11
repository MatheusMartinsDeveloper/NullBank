
type CardSectionAppProps = {
    icon: React.ReactNode
}

export default function CardSectionApp({ icon }: CardSectionAppProps) {
    return (
        <div className="flex gap-4 w-full h-[5em]" data-aos="fade-up">
            <div className="flex justify-center items-center bg-primaryColorLight rounded-2xl w-[15%] h-full transition-all delay-75 hover:delay-75 hover:scale-[110%]">
                {icon}
            </div>
            <div>
                <p className="text-grayColorExtra text-base font-Poppins font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id doloribus obcaecati</p>
            </div>
        </div>
    );
}
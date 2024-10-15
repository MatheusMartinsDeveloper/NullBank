
type AdvantagesProps = {
    icon: React.ReactNode,
    advantage: string
}

export default function Advantages({ icon, advantage }: AdvantagesProps) {
    return (
        <div className="flex gap-4 w-full mobile:ml-3.5" data-aos="fade-up">
            <div className="flex justify-center items-center bg-primaryColorLight rounded-2xl w-[15%] transition-all delay-75 hover:delay-75 hover:scale-[110%] mobile:w-[30%]">
                {icon}
            </div>
            <div>
                <h3 className="text-black text-xl font-Poppins font-semibold mobile:text-lg">{advantage}</h3>
                <p className="text-grayColorDark text-base font-Poppins font-normal mobile:text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id doloribus obcaecati</p>
            </div>
        </div>
    );
}
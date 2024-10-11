
type CardAdvantagesProps = {
    icon: React.ReactNode,
    advantage: string,
    description: React.ReactNode
}

export default function CardAdvantages({ icon, advantage, description }: CardAdvantagesProps) {
    return (
        <div className="relative overflow-hidden flex justify-center items-center bg-primaryColorLight rounded-md w-[18em] h-[13em] card-advantages-after hover:card-advantages-after-hover" data-aos="fade-up">
            <div className="flex flex-col gap-5">
                <div className="space-y-5">
                    {icon}
                    <h3 className="text-primaryColorMain text-xl font-Poppins font-bold">{advantage}</h3>
                </div>
                <div><p className="text-grayColorExtra text-base font-Poppins">{description}</p></div>
            </div>
        </div>
    )
}
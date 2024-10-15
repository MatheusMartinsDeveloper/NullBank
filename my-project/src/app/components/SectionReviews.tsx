import { ImQuotesLeft } from "react-icons/im";
import SwiperReview from "./SwiperReview"

export default function SectionReviews() {
    return (
        <section className="relative flex justify-center items-center bg-backgroundColor w-full h-[95vh]">
            <div className="flex justify-center items-center absolute top-[15%] left-[20%] z-50 bg-primaryColorLight w-[5%] h-[10%] mobile:left-0 mobile:w-[4em] mobile:h-[4em]">
                <ImQuotesLeft size={35} className="text-primaryColorMain" />
            </div>
            <SwiperReview />
            <div className="flex justify-center items-center absolute bottom-[15%] right-[20%] z-50 bg-primaryColorLight w-[5%] h-[10%] mobile:right-0 mobile:w-[4em] mobile:h-[4em]">
                <ImQuotesLeft size={35} className="text-primaryColorMain" />
            </div>
        </section>
    )
}
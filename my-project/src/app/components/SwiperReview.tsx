"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";
import ImagePerson from "../../../public/images/image-person.png";
import ImagePerson2 from "../../../public/images/image-person2.png";
import ImagePerson3 from "../../../public/images/image-person3.png";

export default function SwiperReview() {
    return (
        <Swiper className="flex justify-center items-center bg-gradient w-full h-[60%] z-0"
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ pauseOnMouseEnter: true }}
        >
            <div className="flex justify-center items-center w-full">
                <SwiperSlide className="flex flex-col justify-center items-center w-full">
                    <div className="flex flex-col justify-center items-center gap-10 h-full">
                        <p className="text-grayColorLight text-3xl text-center font-Poppins font-semibold leading-normal mobile:text-lg">O NullBank mudou minha forma de gerenciar minhas <br />
                        finanças. Acesso fácil, segurança e vantagens exclusivas.</p>
                        <Image className="border-4 border-grayColorLight rounded-full w-[10%] mobile:w-[20%]" 
                            src={ImagePerson} 
                            alt="Imagem Cliente" 
                            quality={100} 
                        />
                        <h2 className="text-grayColorLight text-xl uppercase font-Poppins font-normal mobile:flex mobile:flex-col mobile:items-center mobile:text-lg"><span className="font-semibold">Maria Eduarda</span><span>-</span>Creative Director</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col justify-center items-center w-full">
                    <div className="flex flex-col justify-center items-center gap-10 h-full">
                        <p className="text-grayColorLight text-3xl text-center font-Poppins font-semibold leading-normal mobile:text-lg">Escolhi o Nullbank por oferecer taxas de juros competitivas, <br />
                        rapidez e segurança em transações e facilidade de acesso <br />
                        aos seus dados financeiros.</p>
                        <Image className="border-4 border-grayColorLight rounded-full w-[10%] mobile:w-[20%]"
                            src={ImagePerson2} 
                            alt="Imagem Cliente" 
                            quality={100} 
                        />
                        <h2 className="text-grayColorLight text-xl uppercase font-Poppins font-normal mobile:flex mobile:flex-col mobile:items-center mobile:text-lg"><span className="font-semibold">Maria Santos</span><span>-</span>Estudante Universitária</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col justify-center items-center w-full">
                    <div className="flex flex-col justify-center items-center gap-10 h-full">
                        <p className="text-grayColorLight text-3xl text-center font-Poppins font-semibold leading-normal mobile:text-lg">O NullBank mudou minha forma de gerenciar minhas <br />
                        finanças. Acesso fácil, segurança e vantagens exclusivas.</p>
                        <Image className="border-4 border-grayColorLight rounded-full w-[10%] mobile:w-[20%]"
                            src={ImagePerson3} 
                            alt="Imagem Cliente" 
                            quality={100} 
                        />
                        <h2 className="text-grayColorLight text-xl uppercase font-Poppins font-normal mobile:flex mobile:flex-col mobile:items-center mobile:text-lg"><span className="font-semibold">Rafaela Oliveira</span><span>-</span>Designer Gráfico</h2>
                    </div>
                </SwiperSlide>
            </div>
        </Swiper>
    );
}
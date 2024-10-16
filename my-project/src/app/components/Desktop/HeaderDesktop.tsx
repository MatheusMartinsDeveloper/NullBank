import Link from "next/link";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { FaArrowDown } from "react-icons/fa";

export default function HeaderDesktop() {
    const items: MenuItem[] = [
        {
            label: "O NullBank",
            items: [
                {
                    label: "Sobre",
                    className: "text-grayColorExtra text-base font-Poppins font-normal hover:text-primaryColorMain"
                },
                {
                    label: "Blog",
                    className: "text-grayColorExtra text-base font-Poppins font-normal hover:text-primaryColorMain"
                },
                {
                    label: "Comunidade",
                    className: "text-grayColorExtra text-base font-Poppins font-normal hover:text-primaryColorMain"
                },
                {
                    label: "Investidores",
                    className: "text-grayColorExtra text-base font-Poppins font-normal hover:text-primaryColorMain"
                }
            ],
            className: "text-grayColorExtra text-base font-Poppins font-normal hover:text-primaryColorMain group"
        },
        {
            label: "Para você",
            items: [
                {
                    label: "Pix",
                    className: "text-grayColorExtra text-base font-Poppins font-normal hover:text-primaryColorMain"
                },
                {
                    label: "Cartões",
                    className: "text-grayColorExtra text-base font-Poppins font-normal hover:text-primaryColorMain"
                },
                {
                    label: "App",
                    className: "text-grayColorExtra text-base font-Poppins font-normal hover:text-primaryColorMain"
                },
                {
                    label: "Seguros",
                    className: "text-grayColorExtra text-base font-Poppins font-normal hover:text-primaryColorMain"
                }
            ],
            className: "text-grayColorExtra text-base font-Poppins font-normal hover:text-primaryColorMain group"
        },
        {
            label: "Perguntas",
            className: "text-grayColorExtra text-base font-Poppins font-normal hover:text-primaryColorMain"
        },
    ];

    const title = (
        <div>
            <h1 className="text-4xl font-Poppins font-semibold bg-gradient bg-clip-text text-transparent">Nullbank</h1>
        </div>
    );

    return (
        <header className="flex justify-around items-center w-full">
            <Menubar 
                data-aos="fade-down"
                model={items} 
                start={title} 
                submenuIcon={<FaArrowDown size={13} className="transition-all delay-75 ml-4 group-hover:translate-y-1" />}
                className="flex justify-center items-center gap-10 bg-backgroundColor py-6 w-1/2"
            />
            <div className="flex justify-center items-center bg-primaryColorDark py-6 w-[50%]">
                <Link className="bg-grayColorLight rounded-lg py-2 px-7 delay-75 transition-all hover:delay-75 hover:ease-in-out hover:scale-[110%]" href={`#`} data-aos="fade-down">
                    <span className="text-base text-transparent uppercase font-Poppins font-medium bg-gradient bg-clip-text">Baixe o app</span>
                </Link>
            </div>
        </header>
    );
}
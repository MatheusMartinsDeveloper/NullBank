import Link from "next/link";
import { Menubar } from "primereact/menubar";

export default function Header() {
    const items = [
        {
            label: "O NullBank",
            items: [
                {
                    label: "Sobre",
                },
                {
                    label: "Blog",
                },
                {
                    label: "Comunidade",
                },
                {
                    label: "Investidores",
                }
            ]
        },
        {
            label: "Para você",
            items: [
                {
                    label: "Pix",
                },
                {
                    label: "Cartões",
                },
                {
                    label: "App",
                },
                {
                    label: "Seguros",
                }
            ]
        },
        {
            label: "Perguntas"
        }
    ];

    return (
        <header className="flex justify-around items-center w-full">
            <div className="flex justify-center items-center gap-10 bg-backgroundColor py-6 w-[50%]">
                <h1 className="text-4xl font-Poppins font-semibold bg-gradient bg-clip-text text-transparent">Nullbank</h1>
                <Menubar model={items} />
            </div>
            <div className="flex justify-center items-center bg-primaryColorMain py-6 w-[50%]">
                <Link className="bg-grayColorLight rounded-lg py-2 px-7 delay-75 transition-all hover:delay-75 hover:ease-in-out hover:scale-[110%]" href={`#`}>
                    <span className="text-base text-transparent uppercase font-Poppins font-medium bg-gradient bg-clip-text">Baixe o app</span>
                </Link>
            </div>
        </header>
    );
}
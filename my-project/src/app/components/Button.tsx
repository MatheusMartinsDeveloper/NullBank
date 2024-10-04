import Link from "next/link"

export default function Button() {
    return (
        <Link className="bg-grayColorLight rounded-lg py-2 px-7 delay-75 transition-all hover:delay-75 hover:ease-in-out hover:scale-[110%]" href={`#`}>
            <span className="text-base text-transparent uppercase font-Poppins font-medium bg-gradient bg-clip-text">Baixe o app</span>
        </Link>
    )
}
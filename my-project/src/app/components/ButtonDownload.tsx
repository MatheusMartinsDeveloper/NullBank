import Link from "next/link";

type ButtonDownloadProps = {
    content: string,
    className: string,
    icon: React.ReactNode
}

export default function ButtonDownload({ content, className, icon }: ButtonDownloadProps) {
    return (
        <Link className={className} href={`#`}>
            <div>
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-grayColorLight text-xs font-Poppins font-medium">Download via</span>
                <span className="text-grayColorLight text-base font-Poppins font-semibold">{content}</span>
            </div>
        </Link>
    );
}
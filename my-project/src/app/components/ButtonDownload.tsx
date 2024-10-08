import Link from "next/link";

type ButtonDownloadProps = {
    content: string,
    classNameLink: string,
    classNameSpan: string,
    classNameSpanDown: string,
    icon: React.ReactNode
}

export default function ButtonDownload({ content, classNameLink, classNameSpan, classNameSpanDown, icon }: ButtonDownloadProps) {
    return (
        <Link className={classNameLink} href={`#`}>
            <div>
                {icon}
            </div>
            <div className="flex flex-col">
                <span className={classNameSpan}>Download via</span>
                <span className={classNameSpanDown}>{content}</span>
            </div>
        </Link>
    );
}
interface IProps {
    pathname: string
}

// パンくずリスト
export default function BreadThumb(props: IProps) {

    const pathArray = props.pathname.split('/')
    const Label = (path: string, text: string) => {
        return (
            <>
                <a href={`/${path}`} className="text-orange-500 hover:bg-orange-200 px-2 rounded font-semibold">
                    {text}
                </a>
            </>
        )
    }

    const PathLink = (pathName: string) => {
        if (pathName.indexOf('/') != -1) {
            pathName = pathName.split('/').slice(-1)[0]
        }
        return (
            <li className="inline-flex items-center">
                <svg
                    className="w-3 h-3 mx-1 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M8.707 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L11.586 9H4a1 1 0 010-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
                {Label(pathName, pathName)}
            </li>
        )
    }

    return (
        <nav className="text-smm pt-6 pl-8">
            <ol className="list-none flex font-extralight text-xl">
                <li className="inline-flex items-center">
                    {Label("", "Nextjs")}
                </li>
                {pathArray.length > 1 && (
                    <>
                        {PathLink(pathArray[1])}
                    </>
                )
                }
                {pathArray.length > 2 && (
                    <>
                        {PathLink(`${pathArray[1]}/${pathArray[2]}`)}
                    </>
                )
                }
            </ol>
        </nav>)
}
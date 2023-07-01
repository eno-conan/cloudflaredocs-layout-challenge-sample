import { FaChevronRight } from "react-icons/fa";

export type LabelLink = {
    label: string;
    path: string
};

interface IProps {
    lists: LabelLink[]
}

// パンくずリスト
export default function BreadThumb(props: IProps) {

    if (!props.lists) {
        return (<></>)
    }

    return (
        <ol className="flex font-bold overflow-x-auto whitespace-nowrap" aria-label="breadcrumb">
            {props.lists.map(({ label, path }: LabelLink, index) => (
                <li className="flex items-center" key={index}>
                    {props.lists.length - 1 !== index
                        ?
                        <>
                            <a className="text-orange-400 hover:bg-orange-200 px-2 rounded font-light underline" href={path}>{label}</a>
                            <FaChevronRight aria-hidden="true" className="text-xs mx-1 fill-orange-400" />
                        </>
                        :
                        // 一番末端のパスはアイコンを付けない
                        <a className="text-orange-400 hover:bg-orange-200 px-2 rounded font-light underline" href={path}>{label}</a>
                    }
                </li>
            ))}
        </ol>
    );
}
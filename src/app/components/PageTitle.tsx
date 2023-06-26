interface IProps {
    pageTitle: string
}

export default function PageTitle(props: IProps) {
    return (
        <div className='mt-4 pl-8 text-4xl text-white font-serif'>{props.pageTitle}</div>
    )
}
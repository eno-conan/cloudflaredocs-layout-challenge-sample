'use client'

import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IProps {
    pathname: string
}

export default function Toggle(props: IProps) {
    const [isOpenManage, setIsOpenManage] = useState({ overview: false, examples: false, learning: false });
    const [currentOpenPage, setCurrentOpenPage] = useState<string>(props.pathname);

    // Path更新時
    useEffect(() => {
        if (props.pathname === '/queues') {
            setIsOpenManage({ ...isOpenManage, overview: !isOpenManage.overview })
        }
        if (props.pathname === '/queues/examples') {
            setIsOpenManage({ ...isOpenManage, examples: !isOpenManage.examples })
        }
        if (props.pathname === '/queues/learning') {
            setIsOpenManage({ ...isOpenManage, learning: !isOpenManage.learning })
        }
    }, [])

    // 矢印アイコンクリック
    const toggleOpen = (value: string) => {
        if (value === '/queues/examples') {
            setIsOpenManage({ ...isOpenManage, examples: !isOpenManage.examples })
        }
        if (value === '/queues/learning') {
            setIsOpenManage({ ...isOpenManage, learning: !isOpenManage.learning })
        }
    };

    // 各ページのメニュー表示（非トグル項目）
    const UnToggleContent = (targetPath: string, label: string) => {
        return (
            <>
                <div className={
                    classNames(
                        'flex py-1',
                        { 'bg-orange-500': currentOpenPage === targetPath }
                    )}>
                    <Link href={targetPath} className="pt-1 pl-12">
                        <span className="pl-2 text-white font-serif">
                            {label}
                        </span>
                    </Link>
                </div>
            </>
        )
    }

    // 各ページのメニュー表示（トグル項目）
    const ToggleContent = (targetPath: string, animationTarget: boolean) => {
        return (
            <>
                <div className={
                    classNames(
                        'flex py-1',
                        { 'bg-orange-500': currentOpenPage === targetPath }
                    )}>
                    <button
                        className="flex items-center focus:outline-none ml-4 hover:bg-orange-400 rounded"
                        onClick={() => toggleOpen(targetPath)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transform transition-transform duration-200 w-8 h-8 text-gray-500 ${animationTarget ? 'rotate-90' : 'rotate-0'
                                }`}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            {animationTarget ? (
                                <path d="M19 12l-9-9v18z" />
                            ) : (
                                <path d="M19 12l-9-9v18z" />
                            )}
                        </svg>
                    </button>
                    <Link href={targetPath} className="pt-1">
                        <span className="p-2 text-white hover:bg-orange-400 rounded font-serif">
                            {targetPath.toString().replace('/queues/', '')}
                        </span>
                    </Link>
                </div>
                {animationTarget && <div className="pl-12 text-white font-serif">page Contents</div>}
            </>
        )
    }

    return (
        <div className="items-center mt-4">
            {/* overview */}
            {UnToggleContent('/queues', 'overview')}
            {/* Examples */}
            {ToggleContent('/queues/examples', isOpenManage.examples)}
            {/* Learning */}
            {ToggleContent('/queues/learning', isOpenManage.learning)}
        </div>
    );
}

'use client'

import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import CloudflareDocsSvgLabel from './CloudflareDocsSvgLabel';
import CloudflareQueueSvgLabel from './CloudflareQueueSvgLabel';
import BreadThumb, { LabelLink } from './BreadThumb';
import Contents from './ToggleableContent';
interface IProps {
    pathname: string
    contents: React.ReactNode
    pathHierarchyList: LabelLink[]
}

export default function BaseLayout(props: IProps) {

    // サイドバー表示
    const [showSidebar, setShowSidebar] = useState(false);
    const [showIcon, setShowIcon] = useState(true);
    const [previousShowSidebarState, setPreviousShowSidebarState] = useState(false);

    // アイコンクリック時の挙動
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
        setPreviousShowSidebarState(!previousShowSidebarState)
    };

    useEffect(() => {
        const handleResize = () => {
            // 640pxはTailwind CSSのsmブレークポイントに対応
            if (window.innerWidth >= 640) {
                setShowSidebar(false);
            } else {
                if (previousShowSidebarState) {
                    setShowSidebar(true);
                }
            }
            // アイコン表示制御
            if (window.innerWidth >= 200) {
                setShowIcon(true)
            } else {
                setShowIcon(false)
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [previousShowSidebarState])

    // サイドバーコンテンツ
    const SideBarContent = () => {
        return (
            <div
                className={classNames(
                    'w-3/4 bg-gray-800 text-white fixed inset-y-0 left-0 transform transition overflow-auto shadow-4xl',
                    {
                        '-translate-x-full': !showSidebar,
                    }
                )}
                style={{ width: showSidebar ? '75%' : '0' }}
            >

                <div className="md:hidden mt-2 ml-2">
                    <Contents />
                </div>
            </div>
        )
    }

    //左側のコンテンツ
    const LeftPartContent = () => {
        return (
            <div className="w-1/4 hidden sm:inline-block bg-gray-700">
                <CloudflareDocsSvgLabel />
                <div className="border-t border-gray-300"></div>
                <CloudflareQueueSvgLabel />
                <div className="mt-2 ml-2">
                    <Contents />
                </div>
            </div>
        )
    }

    // メインコンテンツ
    const CenterContent = () => {
        return (
            // 画面幅がせまくなったときに表示する内容
            <div className="w-full sm:bg-gray-500 bg-gray-700 px-2">
                {/* Headerコンテンツ1 */}
                <div className="flex justify-between sm:hidden bg-gray-500 py-4 p-4 shadow-lg">
                    <CloudflareDocsSvgLabel />
                </div>
                <div className="sm:hidden border-t border-gray-300"></div>
                {/* Headerコンテンツ2 */}
                <div className="flex justify-between sm:hidden bg-gray-500 py-4 p-4 shadow-lg">
                    <CloudflareQueueSvgLabel />
                    <div>
                        {showIcon && (
                            <button
                                type="button"
                                className="p-2 focus:bg-gray-200"
                                onClick={toggleSidebar}
                                aria-label="Toggle Menu"
                            >
                                {previousShowSidebarState ?
                                    // × アイコン
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill=""
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-8 h-8 text-white"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    :
                                    // 3本線 アイコン
                                    <svg
                                        role={"メニュー"}
                                        aria-label={"メニュー"}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-8 h-8 text-white"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M3 12h18M3 6h18M3 18h18" />
                                    </svg>
                                }
                            </button>
                        )}
                    </div>
                </div>
                {/* パンくずリスト */}
                <BreadThumb lists={props.pathHierarchyList} />
                {/* 実際のコンテンツ */}
                {props.contents}
            </div>)
    }

    // 右側のコンテンツ
    interface ILinkTitle {
        link: string;
        title: string
    }
    const OUTLINE: ILinkTitle[] = [
        { link: 'https://google.com', title: '↑ Top' },
        { link: 'https://google.com', title: '↑Prerequisite: Create a Cloudflare account' },
        { link: 'https://google.com', title: '1. Enable Queues' },
        { link: 'https://google.com', title: '2. Install Wrangler' },
        { link: 'https://google.com', title: '3. Create a queue' },
        { link: 'https://google.com', title: '4. Create a Worker project' },
    ]
    const RightContent = () => {
        return (
            <>
                <div className="w-1/4 bg-gray-500 hidden lg:inline-block pt-4">
                    <div className='text-gray-300 hover:text-white'>
                        {OUTLINE.map((linkTitle: ILinkTitle) => (
                            <div key={linkTitle.title} className="hover:text-orange-500">
                                <a href={linkTitle.link}>{linkTitle.title}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="flex min-h-screen">
                {/* サイドバーコンテンツ */}
                {SideBarContent()}
                {/* 左側のコンテンツ */}
                {LeftPartContent()}
                {/* メインコンテンツ */}
                {CenterContent()}
                {/* 右側のコンテンツ */}
                {RightContent()}
            </div>
        </>
    );
}
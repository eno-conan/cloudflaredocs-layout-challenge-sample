'use client'

import classNames from 'classnames';
import Link from 'next/link';
import React, { useState } from 'react';
import { VscTriangleRight } from 'react-icons/vsc';
import { usePathname } from 'next/navigation';
import { IContent, CONTENTS, } from '../const/contents';
// import styles from './ToggleableContent.module.css';

/* インデント調整のためのMap情報 */
// const indentLevelMap = [
//     { value: 1, class: styles.indentLevel1, },
//     { value: 2, class: styles.indentLevel2, },
//     { value: 3, class: styles.indentLevel3, }
// ]

const ToggleableContent = (props: IContent) => {
    const [isOpen, setIsOpen] = useState(false);
    // 現在のPath取得
    const path = usePathname();

    const handleToggle = () => {
        setIsOpen(!isOpen);

        // setTimeout(() => {
        //     setIsOpen(!isOpen);
        // }, 300);
    };

    // 適用するインデントサイズを決定
    // const applyIndentClass = indentLevelMap.filter((level) => {
    //     if (level.value === props.count!) {
    //         return level.class
    //     }
    // })
    // const indentClass = applyIndentClass[0].class
    const subContentClasses = classNames(`overflow-hidden
    transition-max-height duration-500 ${isOpen ? 'max-h-[500px] ' : 'max-h-0'}
    transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-20'}`,
    );
    // isOpenと同じタイミングで文字のフェードアウトを実行すると、どれくらい遅延させても同じか・・・

    const nextCount = props.count! + 1
    return (
        <div>
            <div className={`flex`}>
                <div className={`flex grid-container ${path === `/${props.path}` ? 'bg-orange-500 rounded pr-2' : ''}`}>
                    {props.subContents ?
                        <VscTriangleRight
                            className={
                                // Globalでインデント適用の場合
                                `mt-2 grid-item indent-level-${props.count} focus:outline-none text-white
                                 hover:bg-orange-400 rounded duration-500 ${isOpen ? 'rotate-90' : 'rotate-0'}`
                                // Moduleでインデント適用の場合
                                // `mt-2 grid-item ${indentClass} focus:outline-none hover:bg-orange-400 rounded
                                // duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`
                            }
                            onClick={() => handleToggle()}
                        />
                        :
                        // サブコンテンツがない場合のインデント
                        // Globalでインデント適用の場合
                        <div className={`grid-item indent-level-${props.count}`}>{""}</div>
                        // Moduleでインデント適用の場合
                        // <div className={`grid-item ${indentClass}`}>{""}</div>
                    }
                    {/* 表示するテキスト */}
                    <Link href={`/${props.path}`} className={
                        `${props.subContents ? '' : 'ml-4'}
                        ${path === `/${props.path}` ? '' : 'hover:bg-orange-400'}
                        p-1 rounded font-sans text-white`
                    }
                    >
                        <div>{props.name}</div>
                    </Link>
                </div>
            </div>
            {
                props.subContents &&
                (
                    <div className={subContentClasses}>
                        {isOpen && (
                            <>
                                {props.subContents.map((subContent, index) => (
                                    <div key={subContent.name}>
                                        <ToggleableContent key={index} {...subContent} count={nextCount} />
                                    </div>
                                )
                                )
                                }
                            </>
                        )}
                    </div>
                )
            }
        </div >
    );
};

const Contents = () => {
    return (
        <div>
            {CONTENTS.map((content, index) => (
                <div key={content.name}>
                    <ToggleableContent key={index} {...content} count={1} />
                </div>
            ))}
        </div>
    );
};

export default Contents;
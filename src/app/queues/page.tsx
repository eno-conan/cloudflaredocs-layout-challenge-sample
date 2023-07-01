'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import BaseLayout from '../components/BaseLayout';
import PageTitle from '../components/PageTitle';
import { createPathHierarchyList } from '../helpers/createBreadThumb';

export default function Overview() {
    const path = usePathname();
    // パンくずリストのための情報取得
    const pathHierarchyList = createPathHierarchyList(path);

    const Content = () => {
        return (<>
            <PageTitle pageTitle={'Overview'} />
        </>)
    }

    return (
        <BaseLayout pathname={path} contents={Content()} pathHierarchyList={pathHierarchyList} />
    )
}
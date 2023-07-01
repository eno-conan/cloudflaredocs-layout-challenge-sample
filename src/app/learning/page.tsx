'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import BaseLayout from '@/app/components/BaseLayout';
import PageTitle from '@/app/components/PageTitle';
import { createPathHierarchyList } from '@/app/helpers/createBreadThumb';

export default function Learning() {
    const path = usePathname();
    // パンくずリストのための情報取得
    const pathHierarchyList = createPathHierarchyList(path);

    const Content = () => {
        return (<>
            <PageTitle pageTitle={'Learning'} />
        </>
        )
    }

    return (
        <BaseLayout pathname={path} contents={Content()} pathHierarchyList={pathHierarchyList} />
    )

}
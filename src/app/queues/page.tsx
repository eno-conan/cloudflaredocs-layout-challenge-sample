'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import BaseLayout from '../components/BaseLayout';
import PageTitle from '../components/PageTitle';

export default function Overview() {
    const path = usePathname();

    const Content = () => {
        return (<>
            <PageTitle pageTitle={'Overview'} />
        </>)
    }

    return (
        <BaseLayout pathname={path} contents={Content()} />
    )
}
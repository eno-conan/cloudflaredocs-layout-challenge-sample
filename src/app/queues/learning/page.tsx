'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import BaseLayout from '@/app/components/BaseLayout';
import PageTitle from '@/app/components/PageTitle';

export default function Learning() {
    const path = usePathname();

    const Content = () => {
        return (<>
            <PageTitle pageTitle={'Learning'} />
        </>
        )
    }

    return (
        <BaseLayout pathname={path} contents={Content()} />
    )

}
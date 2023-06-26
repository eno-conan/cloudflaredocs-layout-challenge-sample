'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import BaseLayout from '../../components/BaseLayout';
import PageTitle from '@/app/components/PageTitle';

export default function Examples() {
    const path = usePathname();

    const Content = () => {
        return (
            <>
                <PageTitle pageTitle={'Examples'} />
            </>
        )
    }

    return (
        <BaseLayout pathname={path} contents={Content()} />
    )

}
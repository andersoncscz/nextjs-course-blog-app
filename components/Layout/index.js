import React from 'react'
import MainNavigation from '../Layout/MainNavigation'

export default function Layout({children}) {
    return (
        <>
            <MainNavigation />
            <main>
                {children}
            </main>
        </>
    )
}

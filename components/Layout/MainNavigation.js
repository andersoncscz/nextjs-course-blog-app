import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import classes from './MainNavigation.module.css'
/** 
 * Components which are not plain text must to wraped with the anchor tag <a></> 
 * */

export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <Link href="/">
                <a>
                    <Logo />
                </a>
            </Link>
            <nav>
                <ul>
                    <li><Link href="/posts">Posts</Link></li>
                    <li><Link href="/contact">Contact</Link></li> 
                </ul>
            </nav>
        </header>
    )
}

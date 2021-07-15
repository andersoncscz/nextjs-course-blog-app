import React from 'react'
import Hero from '../components/HomePage/Hero'
import FeaturedPosts from '../components/HomePage/FeaturedPosts'
import { getFeaturedPosts } from '../lib/posts/utils'
import Head from 'next/head'

export default function HomePage({ featuredPosts }) {
    return (
        <>
            <Head>
                <title>Anderson Blog</title>
                <meta description="I post about programming and fullstack development with Javascript" />
            </Head>
            <Hero />
            <FeaturedPosts featuredPosts={featuredPosts} />
        </>
    )
}

export function getStaticProps(context) {
    const featuredPosts = getFeaturedPosts()

    return {
        props: {
            featuredPosts
        },
    }
}

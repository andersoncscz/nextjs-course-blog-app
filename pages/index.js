import React from 'react'
import Hero from '../components/HomePage/Hero'
import FeaturedPosts from '../components/HomePage/FeaturedPosts'
import { getFeaturedPosts } from '../lib/posts/utils'

export default function HomePage({ featuredPosts }) {
    return (
        <>
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

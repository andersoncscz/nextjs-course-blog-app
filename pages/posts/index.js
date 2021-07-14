import React from 'react'
import AllPosts from '../../components/Posts/AllPosts'
import { getAllPosts } from '../../lib/posts/utils'
import Head from 'next/head'

export default function AllPostsPage({posts}) {
    return (
        <>
            <Head>
                <title>All posts</title>
                <meta name="description" content="A list of all programming-related tutorials and posts" />
            </Head>
            <AllPosts posts={posts} />
        </>
    )
}

export function getStaticProps() {
    const posts = getAllPosts()
    
    return {
        props: {
            posts,
        }
    }
}

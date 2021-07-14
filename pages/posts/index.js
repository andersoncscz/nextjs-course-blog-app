import React from 'react'
import AllPosts from '../../components/Posts/AllPosts'
import { getAllPosts } from '../../lib/posts/utils'

export default function AllPostsPage({posts}) {
    return (
        <AllPosts posts={posts} />
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

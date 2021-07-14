import React from 'react'
import PostContent from '../../components/Posts/PostDetail/PostContent'
import { getPostData, getPostsFiles } from '../../lib/posts/utils'

export default function PostDetailPage({ post }) {
    return (
        <PostContent post={post} />
    )
}

export function getStaticPaths() {
    const postFileNames = getPostsFiles()
    const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/,''))
    const paths = slugs.map(slug => ({
        params: {
            slug
        }
    }))

    return {
        paths,
        fallback: false,
    }
}

export function getStaticProps(context) {
    const {slug} = context.params

    const post = getPostData(slug)

    return {
        props: {
            post
        },
        revalidate: 600,
    }
}
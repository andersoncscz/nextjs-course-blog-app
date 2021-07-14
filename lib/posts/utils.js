import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'content/posts')

export function getPostsFiles() {
    return fs.readdirSync(postDirectory)
}

export function getPostData(postIdentifier) {
    const slug = postIdentifier.replace(/\.md$/,'') // regex to remove the file extension
    const filePath = path.join(postDirectory, `${slug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const {data, content} = matter(fileContent)

    const postData = {
        slug,
        ...data,
        content
    }

    return postData
}

export function getAllPosts() {
    const postFiles = getPostsFiles()

    const posts = postFiles.map(postFile => getPostData(postFile))
    const sortedPosts = posts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)

    return sortedPosts
}

export function getFeaturedPosts() {
    const posts = getAllPosts()
    const featuredPosts = posts.filter(post => post.isFeatured)

    return featuredPosts
}
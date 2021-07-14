import React from 'react'
import PostHeader from './PostHeader'
import classes from './PostContent.module.css'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialDark} from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function PostContent({ post }) {
    const {title, slug, image, content} = post
    const imagePath = `/images/posts/${slug}/${image}`
    
    const components = {
        p(paragraph) {
            const { node } = paragraph;
            if (node.children[0].tagName === "img") {
              const image = node.children[0];
            
              return (
                <div className={classes.image}>
                  <Image
                    src={`/images/posts/${slug}/${image.properties.src}`}
                    alt={image.alt}
                    width={600}
                    height={300}
                  />
                </div>
              );
            }
            return <p>{paragraph.children}</p>;
          },

        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");

            return !inline && match ? (
                <SyntaxHighlighter
                    style={materialDark}
                    language={match[1]}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    {...props} />
            ) : (
                <code className={className} {...props} />
            );
        },
    }

    return (
        <article className={classes.content}>
            <PostHeader title={title} image={imagePath} />
            <ReactMarkdown components={components}>
                {content}
            </ReactMarkdown>
        </article>
    )
}

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classes from './PostItem.module.css'

export default function PostItem({ post }) {
    const { title, image, excerpt, date, slug } = post 
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    console.log(slug)
    const imagePath = `/images/posts/${slug}/${image}`
    const linkPath = `/posts/${slug}`

    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <a>
                    <div className={classes.image}>
                        <Image src={imagePath} alt={title} width={500} height={400} />                        
                    </div>
                    <div className={classes.content}>
                        <h3>
                            {title}
                        </h3>
                        <time>
                            {formattedDate}
                        </time>
                        <p>
                            {excerpt}
                        </p>
                    </div>
                </a>
            </Link>
        </li>
    )
}

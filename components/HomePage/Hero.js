import React from 'react'
import Image from 'next/image'
import classes from '../HomePage/Hero.module.css'

export default function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/profile.jpg" alt="An image showing Anderson" width={300} height={300} />
            </div>
            <h1>I'm Anderson</h1>
            <p>
                I blog about fullstack development using JavaScript/Typescript - especially with 
                frameworks regarding to React, React Native and NodeJs.
            </p>
        </section>
    )
}

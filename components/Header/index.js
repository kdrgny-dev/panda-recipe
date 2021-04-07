import React from 'react'
import Link from 'next/link'
import styles from './index.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <a className={`${styles.header_link} dela`}>
                    <h1>Panda Recipes</h1>
                    <h2>Lets Make Some Funny Foods</h2>
                </a>
            </Link>
            <Link href="/">
                <a className="bg-yellow-400 hover:bg-white text-purple-800 font-bold py-2 px-4 rounded">
                    HOME
                </a>
            </Link>
        </header>
    )
}

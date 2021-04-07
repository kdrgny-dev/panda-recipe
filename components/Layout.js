import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children}) {
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto py-10">
                {children}
            </div>
            <Footer></Footer>
        </div>
    )
}

import React from 'react'
import ThemeLink from './ui/ThemeLink'

type NavType = {
    to: string,
    title: string
}

interface NavbarType {
    navs: NavType[]
}

const Navbar = ({ navs }: NavbarType) => {
    return (
        <header className="flex justify-between">
            <div className="">
                <img src="/logo.svg" alt="Logo" />
            </div>
            <nav className="">
                <ul className='flex gap-10'>
                    {navs?.map((nav, ind) => (<li key={ind}><ThemeLink to={nav.to} title={nav.title} /></li>))}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
import React from 'react'
import ThemeLink from './ui/ThemeLink'
import Image from 'next/image'

type NavType = {
    id: string,
    to: string,
    title: string
}

interface NavbarType {
    navs: NavType[]
}

const Navbar = ({ navs }: NavbarType) => {
    return (
        <header className="flex justify-center md:justify-between relative">
            {/*site logo*/}
            <div>
                <Image className='h-auto w-auto max-h-[46] md:max-h-[75]' src="/logo.svg" alt="Logo" width={175} height={74} />
            </div>
            <nav className="fixed md:static bg-brand-primary w-full top-48 left-[-100%]">
                <ul className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-10 p-10 md:p-[unset]'>
                    {navs?.map((nav) => (<li key={nav.id}><ThemeLink style='font-semibold text-text-primary text-lg font-figtree hover:text-white' to={nav.to} title={nav.title} /></li>))}
                </ul>
            </nav>
            <button className='md:hidden space-y-1 absolute top-0 bottom-0 my-auto right-4 h-fit'>
                <span className='w-[20px] block rounded-xl h-[2px] bg-white'></span>
                <span className='w-[20px] block rounded-xl h-[2px] bg-white'></span>
                <span className='w-[20px] block rounded-xl h-[2px] bg-white'></span>
            </button>
        </header>
    )
}

export default Navbar
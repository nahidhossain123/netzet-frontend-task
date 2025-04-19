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
            <nav className="hidden md:block">
                <ul className='flex gap-10'>
                    {navs?.map((nav) => (<li key={nav.id}><ThemeLink style='font-semibold text-text-primary text-lg font-figtree hover:text-white' to={nav.to}>{nav.title}</ThemeLink></li>))}
                </ul>
            </nav>
            <button className='md:hidden absolute top-0 bottom-0 my-auto right-2 h-fit'>
                <Image src={'/menu-icon.svg'} alt='menu' width={20} height={15} />
            </button>
        </header>
    )
}

export default Navbar
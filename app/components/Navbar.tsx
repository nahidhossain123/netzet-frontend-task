import React from 'react'
import ThemeLink from './ui/ThemeLink'
import Image from 'next/image'
import { NavbarType } from '@/utils/types'

const Navbar = ({ navs }: NavbarType) => {
    return (
        <header className="flex justify-center md:justify-between relative">
            {/*site logo*/}
            <div>
                <Image className='h-auto w-auto max-h-[46] md:max-h-[74]' src="/icons/logo.svg" alt="Logo" width={174} height={74} />
            </div>
            {/* nav Links */}
            <nav className="hidden md:block">
                <ul className='flex gap-10'>
                    {navs?.map((nav) => (<li key={nav.id}><ThemeLink to={nav.href}>{nav.title}</ThemeLink></li>))}
                </ul>
            </nav>
            {/* mobile menu button */}
            <button className='md:hidden absolute top-0 bottom-0 my-auto right-2'>
                <Image src={'/icons/menu-icon.svg'} alt='menu' width={20} height={15} />
            </button>
        </header>
    )
}

export default Navbar
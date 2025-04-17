import Link from 'next/link'
import React, { ReactNode } from 'react'

interface LinkType {
    children: ReactNode,
    to: string,
    style: string
}

const ThemeLink = ({ children, to, style }: LinkType) => {
    return (
        <Link className={`${style}`} href={to}>{children}</Link>
    )
}

export default ThemeLink
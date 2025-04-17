import Link from 'next/link'
import React from 'react'

interface LinkType {
    title: string,
    to: string,
    style: string
}

const ThemeLink = ({ title, to, style }: LinkType) => {
    return (
        <Link className={`${style}`} href={to}>{title}</Link>
    )
}

export default ThemeLink
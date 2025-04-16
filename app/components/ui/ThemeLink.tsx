import Link from 'next/link'
import React from 'react'

interface LinkType {
    title: string,
    to: string
}

const ThemeLink = ({ title, to }: LinkType) => {
    return (
        <Link href={to}>{title}</Link>
    )
}

export default ThemeLink
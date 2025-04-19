import { LinkType } from '@/utils/types'
import Link from 'next/link'
import React from 'react'

const ThemeLink = ({ children, to, style }: LinkType) => {
    return (
        <Link className={`${style}`} href={to}>{children}</Link>
    )
}

export default ThemeLink
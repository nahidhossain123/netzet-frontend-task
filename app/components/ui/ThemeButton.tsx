import { ThemeButtonPropsType } from '@/utils/types'
import Image from 'next/image'
import React from 'react'

const ThemeButton = ({
    children,
    buttonStyle,
    onButtonClick,
    iconSrc,
    iconAlt,
    iconStyle,
    iconWidth,
    iconHeight
}: ThemeButtonPropsType) => {
    return (
        <button onClick={onButtonClick} className={`
            w-full 
            flex 
            items-center
            justify-center
            gap-2.5
            drop-shadow-[2px_2px_5px]
            drop-shadow-brand-secondary50 
            bg-brand-primary 
            py-2 
            px-[83px]
            rounded-[10px]
            text-white
            text-4 
            font-bold
            border-brand-primary 
            hover:bg-brand-secondary100 
            hover:drop-shadow-brand-primary 
            ${buttonStyle || ''}
        `}>
            <span>{children}</span>
            {iconSrc && (<Image src={iconSrc} className={`${iconStyle || ''}`} alt={iconAlt ? iconAlt : 'icon'} width={iconWidth} height={iconHeight} />)}
        </button>
    )
}

export default ThemeButton
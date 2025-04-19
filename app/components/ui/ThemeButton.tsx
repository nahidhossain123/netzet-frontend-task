import Image from 'next/image'
import React, { ReactNode } from 'react'

interface ThemeButtonPropsType {
    children: ReactNode,
    buttonStyle?: string,
    onButtonClick?: () => void,
    iconSrc?: string,
    iconAlt?: string,
    iconStyle?: string,
    iconWidth?: number,
    iconHeight?: number
}

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
            md:w-[unset] 
            flex 
            items-center
            justify-center
            gap-2.5
            drop-shadow-md 
            drop-shadow-brand-secondary50 
            bg-brand-primary 
            py-2 
            px-[83px]
            rounded-[10px]
            text-white
            text-4 
            font-bold 
            border-2 
            border-brand-primary 
            hover:bg-transparent 
            hover:border-white 
            ${buttonStyle && buttonStyle}
        `}>
            <span>{children}</span>
            {iconSrc && (<Image src={iconSrc} className={`${iconStyle}`} alt={iconAlt ? iconAlt : 'icon'} width={iconWidth} height={iconHeight} />)}
        </button>
    )
}

export default ThemeButton
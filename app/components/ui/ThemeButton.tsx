import React, { ReactNode } from 'react'

interface ThemeButtonPropsType {
    children: ReactNode,
    buttonStyle?: string,
}

const ThemeButton = ({ children, buttonStyle }: ThemeButtonPropsType) => {
    return (
        <button className={`drop-shadow-md drop-shadow-brand-secondary50 bg-brand-primary py-2 px-[83px] rounded-[10px] text-white text-4 font-bold border-2 border-brand-primary hover:bg-transparent hover:border-white hover:scale-110 transition-all  ${buttonStyle && buttonStyle}`}>
            {children}
        </button>
    )
}

export default ThemeButton
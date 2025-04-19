import { ReactNode } from "react";

export interface ThemeButtonPropsType {
    children: ReactNode,
    buttonStyle?: string,
    onButtonClick?: () => void,
    iconSrc?: string,
    iconAlt?: string,
    iconStyle?: string,
    iconWidth?: number,
    iconHeight?: number
}

export interface LinkType {
    children: ReactNode,
    to: string,
    style?: string
}

export type NavType = {
    id: string,
    href: string,
    title: string
}

export interface NavbarType {
    navs: NavType[]
}
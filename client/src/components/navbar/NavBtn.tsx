import { FC } from 'react'
import {NavLink, NavLinkRenderProps} from "react-router-dom"

interface PropsData{
    children : string ;
    to : string ;
}

const NavBtn: FC<PropsData> = ({to,children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }:NavLinkRenderProps)=>{
                return `px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200  ${isActive && "font-bold text-teal-600 border-b-2 border-teal-600 border-solid"} `
            }}
        >
            {children}
        </NavLink>
    )
}

export default NavBtn

import { FC, ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

interface PropsData { 
    to : string,
    children : ReactElement
}

const NavMoreBtn: FC<PropsData> = ({ to , children }) => {
    return (
        <NavLink
            to={to}
            className={({isActive})=>(
                `flex flex-row items-start rounded-lg bg-transparent p-2 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 ${isActive && "font-bold text-teal-600 border-b-2 border-teal-600 border-solid"}`
            )}
        >
            {children}
        </NavLink>
    )
}

export default NavMoreBtn

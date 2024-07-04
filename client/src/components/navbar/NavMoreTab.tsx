import { FC, ReactElement } from 'react'

interface PropsData {
    children: ReactElement,
    title: string,
    subTitle: string
}

const NavMoreTab: FC<PropsData> = ({children,title,subTitle}) => {
    return (
        <>
            <div className="bg-teal-500 text-white rounded-lg p-3">
                {children}
            </div>
            <div className="ml-3">
                <p className="font-semibold">{title}</p>
                <p className="text-sm">{subTitle}</p>
            </div>
        </>
    )
}

export default NavMoreTab

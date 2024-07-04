import { FC, ReactElement } from 'react'

interface PropsData {
    children : ReactElement | string ;
}

const Container : FC<PropsData> = ({children}) => {
  return (
    <div className='lg:px-8 px-4 md:px-6 max-w-screen-xl'>
        {children}
    </div>
  )
}

export default Container

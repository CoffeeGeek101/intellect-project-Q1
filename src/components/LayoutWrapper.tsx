import { type FC, type ReactNode } from 'react'
import { twMerge } from 'tw-merge'

/**
 * LayoutWapper is the generic higher order component to share common styles to
 * all the pages on the app. 
 * 
 * @params :
 *  - children : the nested component / feature component
 *  - className : this component can be styled as per needs, if not base styles will be applied
  **/

interface LayoutWrapperI {
    children : ReactNode
    className ?: string
}

const LayoutWrapper : FC<LayoutWrapperI> = ({children, className}) => {
  return (
    // twMerge resolves/overrides class conflicts
    <div className={twMerge(`h-[100dvh] w-[100dvw] p-5 ${className}`)}>  
        {children}
    </div>
  )
}

export default LayoutWrapper
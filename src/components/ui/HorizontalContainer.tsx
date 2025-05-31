import { type FC, type HTMLAttributes, type ReactNode } from 'react'
import { twMerge } from 'tw-merge'

/**
 * HorizontalContainer is a generic base <div> for small screen sizes
 * Purpose of this component is to separate smaller screen styles keeping maintainibilty in mind.
 * Use-age for UI block with horizontal flow
 * 
 * @params : 
 *  - children : nested component
 *  - className : class required for medium and larger screen size
 *  - props : all the available properties in div DOM node
 * **/ 

interface HorizontalContainers extends HTMLAttributes<HTMLDivElement> {
    children : ReactNode
}

const HorizontalContainers : FC<HorizontalContainers> = ({children, className, ...props}) => {
  return (
    <div {...props} className={twMerge(`w-[100%] gap-2 grid grid-cols-3 scale-75 ${className}`)} >{children}</div>
  )
}

export default HorizontalContainers
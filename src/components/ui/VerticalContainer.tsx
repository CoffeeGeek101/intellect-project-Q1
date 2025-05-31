import { type FC, type HTMLAttributes, type ReactNode } from 'react'
import { twMerge } from 'tw-merge'

/**
 * VerticalContainer is a generic base <div> for small screen sizes
 * Purpose of this component is to separate smaller screen styles keeping maintainibilty in mind.
 * Use-age for UI block with vertical flow
 * 
 * @params : 
 *  - children : nested component
 *  - className : class required for medium and larger screen size
 *  - props : all the available properties in div DOM node
 * **/ 

interface VerticalContainerI extends HTMLAttributes<HTMLDivElement> {
    children : ReactNode
}

const VerticalContainer : FC<VerticalContainerI> = ({children, className, ...props}) => {
  return (
    <div {...props} className={twMerge(`flex flex-col items-center justify-between ${className}`)} >{children}</div>
  )
}

export default VerticalContainer
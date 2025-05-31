import { type ButtonHTMLAttributes, type FC } from 'react'
import { twMerge } from 'tw-merge'

/**
 * Button is a generic UI component
 * 
 * @params : 
 * - content : Text content for button
 * - onClick : Callback to perform action
 * - value_ : value of data for which button has been used for validation
 *  
 * **/ 

interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
    content : string,
    onClick : () => void,
    value_ : string | null
}

const Button : FC<ButtonI> = ({content, onClick, className, value_, ...props}) => {
  return (
    <button
    {...props}
    className={twMerge(`w-[100%] text-[13px] md:w-[75%] md:text-[15px] lg:w-[50%] py-3 rounded-sm text-slate-50 font-medium 
                ${value_ === null ? 'bg-slate-400 pointer-events-none' : 'bg-amber-500 cursor-pointer'} ${className}`)
              }
    onClick={onClick}
    >
        {content}
    </button>
  )
}

export default Button
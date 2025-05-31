import { type FC, type MouseEvent } from 'react'

/**
 * FlashCard is an UI component 
 * 
 * @params : 
 *  - icon : Icon/Logo/Image which needs to be added to the card
 *  - title : Text content for the card
 *  - onClick : Takes in a callback to update parent component state
 *  - value : Value from parent for value based CSS updates
 * **/ 

interface FlashCardsI {
    icon : string,
    title : string,
    onClick ?: (e: MouseEvent) => void,
    value ?: string | null
}

const FlashCards : FC<FlashCardsI> = ({icon, title, onClick, value}) => {
  
  return (
    <div 
    // we are setting value in parent component from this attribute, and using the value to perform UI updates on the component.
    data-value={title}
    className={`flex flex-col items-center justify-center rounded-md py-5 px-4 gap-4 cursor-pointer
                ${value === title ? 'border-blue-400 border-[1px]' : 'border-slate-500/30 border-[0.5px]'}`
              }
    onClick={(e : MouseEvent)=>onClick!(e)}
    >
        <img src={icon} className='w-[40px] md:w-[60px]'/>
        <p className='text-[10px] text-slate-800'>{title}</p>
    </div>
  )
}

export default FlashCards
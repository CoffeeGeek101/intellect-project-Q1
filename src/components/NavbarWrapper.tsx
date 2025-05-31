import { ArrowLeft, Plus } from 'lucide-react'
import { type FC, type ReactNode } from 'react'

/**
 * NavbarWrapper is generic navbar component, which help us share the styles to all the pages
 * @params : 
 *  - title : Title is the title of the page navbar is rendering 
 * **/ 

interface NavbarWrapperI {
    title : ReactNode
}

const NavbarWrapper : FC<NavbarWrapperI> = ({title}) => {
  return (
    <div className='w-full h-auto flex items-center justify-between px-3.5 py-2.5'>
        <ArrowLeft color='grey' size={20}/>
        <h3 className='text-xl font-bold md:text-2xl lg:text-3xl'>{title}</h3>   
        <Plus className='rotate-[45deg]' color='grey'/>
    </div>
  )
}

export default NavbarWrapper
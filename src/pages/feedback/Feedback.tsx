import { useState, type MouseEvent } from 'react'
import LayoutWrapper from '../../components/LayoutWrapper'
import NavbarWrapper from '../../components/NavbarWrapper'
import FlashCards from '../../components/ui/FlashCards'
import HorizontalContainers from '../../components/ui/HorizontalContainer'
import VerticalContainer from '../../components/ui/VerticalContainer'
import { feedback_data } from '../../util/feedback_data'
import Button from '../../components/ui/Button'

const Feedback = () => {

    const [userFeedback, setUserFeedback] = useState<string | null>(null);

    // handle to update userFeedback
    const handleFeedback = (e : MouseEvent) => {
        // get the data from "data-value" from each flash card on click
        let feedback = e.currentTarget.getAttribute('data-value')
        setUserFeedback(feedback)
    }

    const handleContinue = () => {
        // navigate to next page
        alert(`Thanks for your feedback, value: ${userFeedback}`)
    }

  return (
    <LayoutWrapper className='flex flex-col items-center justify-between py-5 md:py-14'>
        <NavbarWrapper title="Wellbeing Check-in"/>
        <VerticalContainer className='w-full h-auto gap-8 md:gap-10'>
            <p className='font-medium text-[14px] md:text-[18px] md:font-medium '>Hello! How are you feeling today?</p>
            <HorizontalContainers className='md:w-[60%] grid grid-cols-2 scale-100 lg:flex flex-wrap items-center justify-center'>
                {
                    feedback_data.map((feedback, idx) => {
                        return(
                            <FlashCards 
                            icon={feedback.icon} 
                            title={feedback.title} 
                            key={idx} 
                            onClick={(e : MouseEvent)=>handleFeedback(e)}
                            value={userFeedback}
                            />
                        )
                    })
                }
            </HorizontalContainers>
        </VerticalContainer>
        <Button content='Continue' onClick={()=>handleContinue()} value_={userFeedback}/>
    </LayoutWrapper>
  )
}

export default Feedback
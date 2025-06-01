import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import Feedback from './Feedback'
import { feedback_data } from '../../util/feedback_data'


// mock the component with props 
vi.mock('../../components/LayoutWrapper', () => ({
  default: ({ children }) => <div>{children}</div>
}))
vi.mock('../../components/NavbarWrapper', () => ({
  default: ({ title }) => <div>{title}</div>
}))
vi.mock('../../components/ui/FlashCards', () => ({
  default: ({ title, onClick }) => (
    <div data-testid="flashcard" data-value={title} onClick={onClick}>
      {title}
    </div>
  )
}))
vi.mock('../../components/ui/Button', () => ({
  default: ({ onClick }) => <button onClick={onClick}>Continue</button>
}))

describe('Feedback Page', () => {

    // checck if the all the cards are rendering
  it('renders all flashcards', () => {
    render(<Feedback />)
    expect(screen.getAllByTestId('flashcard').length).toBe(feedback_data.length)
  })

    // check if the data is being updated after click
  it('selects a flashcard when clicked', () => {
    render(<Feedback />)
    const firstCard = screen.getAllByTestId('flashcard')[0]
    fireEvent.click(firstCard)
    expect(firstCard.getAttribute('data-value')).toBe(feedback_data[0].title)
  })

    // check if the alert is triggered on button click  
  it('shows alert on continue', () => {
    window.alert = vi.fn()
    render(<Feedback />)
    fireEvent.click(screen.getAllByTestId('flashcard')[0])
    fireEvent.click(screen.getByText('Continue'))
    expect(window.alert).toHaveBeenCalledWith(
      `Thanks for your feedback, value: ${feedback_data[0].title}`
    )
  })
})

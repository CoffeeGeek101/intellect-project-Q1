import { render, screen, fireEvent } from '@testing-library/react'
import FlashCards from '../../components/ui/FlashCards'

describe('FlashCards', () => {
  const mockClick = vi.fn()

  it('renders title and icon', () => {
    render(<FlashCards icon="/mock_image.png" title="Happy" onClick={mockClick} value={null} />)
    expect(screen.getByText('Happy')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', '/mock_image.png')
  })

  it('changes border color, when selected', () => {
    render(<FlashCards icon="/mock_image.png" title="Happy" onClick={mockClick} value="Happy" />)
    const card = screen.getByText('Happy').parentElement
    expect(card?.className).toContain('border-blue-400')
  })

  it('triggers onClick', () => {
    render(<FlashCards icon="/mock_image.png" title="Happy" onClick={mockClick} value={null} />)
    fireEvent.click(screen.getByText('Happy'))
    expect(mockClick).toHaveBeenCalled()
  })
})

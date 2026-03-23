import { render, screen } from '@testing-library/react'
import { Callout } from './Callout'

describe('Callout', () => {
  it('renders plain text content', () => {
    render(<Callout variant="info" content="Just a plain note." />)
    expect(screen.getByText('Just a plain note.')).toBeInTheDocument()
  })

  it('renders bold markdown as <strong>', () => {
    render(<Callout variant="warn" content="This is **important**." />)
    expect(screen.getByText('important')).toBeInTheDocument()
    expect(screen.getByText('important').tagName).toBe('STRONG')
  })

  it('renders backtick code as <code>', () => {
    render(<Callout variant="alert" content="Use `===` not `==`." />)
    const codeEls = screen.getAllByRole('code', { hidden: true })
    expect(codeEls.length).toBeGreaterThan(0)
  })

  it('applies data-variant attribute', () => {
    const { container } = render(<Callout variant="alert" content="Danger!" />)
    const el = container.firstChild as HTMLElement
    expect(el).toHaveAttribute('data-variant', 'alert')
  })

  it('has role=note', () => {
    render(<Callout variant="info" content="Note." />)
    expect(screen.getByRole('note')).toBeInTheDocument()
  })

  it('handles mixed markdown', () => {
    render(<Callout variant="warn" content="Use **strict mode** with `'use strict'`." />)
    expect(screen.getByText('strict mode').tagName).toBe('STRONG')
    expect(screen.getByText("'use strict'").tagName).toBe('CODE')
  })
})

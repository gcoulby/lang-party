import { render, screen } from '@testing-library/react'
import { EcoCard } from './EcoCard'
import type { EcoMapping } from '../../types/content'

const BASE_MAPPING: EcoMapping = {
  from: 'Maven',
  fromLabel: 'Java',
  to: ['★ npm', 'pnpm', 'yarn'],
}

describe('EcoCard', () => {
  it('renders the source tool name', () => {
    render(<EcoCard mapping={BASE_MAPPING} />)
    expect(screen.getByText('Maven')).toBeInTheDocument()
  })

  it('renders the from language label', () => {
    render(<EcoCard mapping={BASE_MAPPING} />)
    expect(screen.getByText('Java')).toBeInTheDocument()
  })

  it('renders all equivalent tools (★ stripped)', () => {
    render(<EcoCard mapping={BASE_MAPPING} />)
    expect(screen.getByText('npm')).toBeInTheDocument()
    expect(screen.getByText('pnpm')).toBeInTheDocument()
    expect(screen.getByText('yarn')).toBeInTheDocument()
  })

  it('marks recommended tools with data-recommended=true', () => {
    const { container } = render(<EcoCard mapping={BASE_MAPPING} />)
    const npmChip = screen.getByText('npm').closest('span')
    expect(npmChip).toHaveAttribute('data-recommended', 'true')
  })

  it('marks non-recommended tools with data-recommended=false', () => {
    render(<EcoCard mapping={BASE_MAPPING} />)
    const pnpmChip = screen.getByText('pnpm').closest('span')
    expect(pnpmChip).toHaveAttribute('data-recommended', 'false')
  })

  it('renders note when present', () => {
    const mapping: EcoMapping = { ...BASE_MAPPING, note: 'pnpm is fastest for monorepos.' }
    render(<EcoCard mapping={mapping} />)
    expect(screen.getByText('pnpm is fastest for monorepos.')).toBeInTheDocument()
  })

  it('does not render note element when absent', () => {
    const { container } = render(<EcoCard mapping={BASE_MAPPING} />)
    expect(container.querySelector('.note')).not.toBeInTheDocument()
  })
})

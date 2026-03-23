import { buildIndex, search } from './searchIndex'
import type { Section } from '../types/content'

const MOCK_SECTIONS: Section[] = [
  {
    id: 'variables',
    slug: 'variables',
    group: 'basics',
    title: 'Variables & Types',
    description: '',
    concepts: [
      { id: 'declaration', title: 'Variable Declaration', panels: [] },
      { id: 'const', title: 'Constants', panels: [] },
    ],
  },
  {
    id: 'functions',
    slug: 'functions',
    group: 'basics',
    title: 'Functions',
    description: '',
    concepts: [
      { id: 'arrow', title: 'Arrow Functions', panels: [] },
    ],
  },
  {
    id: 'ecosystem',
    slug: 'ecosystem',
    group: 'ecosystem',
    title: 'Tool Equivalents',
    description: '',
    concepts: [],
  },
]

describe('buildIndex', () => {
  it('creates one entry per section', () => {
    const index = buildIndex(MOCK_SECTIONS)
    const sectionEntries = index.filter((e) => !e.conceptId)
    expect(sectionEntries).toHaveLength(3)
  })

  it('creates one entry per concept', () => {
    const index = buildIndex(MOCK_SECTIONS)
    const conceptEntries = index.filter((e) => e.conceptId !== undefined)
    expect(conceptEntries).toHaveLength(3)
  })

  it('sets sectionTitle on concept entries', () => {
    const index = buildIndex(MOCK_SECTIONS)
    const arrowEntry = index.find((e) => e.conceptId === 'arrow')
    expect(arrowEntry?.sectionTitle).toBe('Functions')
  })
})

describe('search', () => {
  const index = buildIndex(MOCK_SECTIONS)

  it('returns empty array for empty query', () => {
    expect(search(index, '')).toEqual([])
    expect(search(index, '   ')).toEqual([])
  })

  it('finds section by exact title match', () => {
    const results = search(index, 'Functions')
    expect(results.length).toBeGreaterThan(0)
    expect(results[0].sectionId).toBe('functions')
  })

  it('finds section by partial match', () => {
    const results = search(index, 'var')
    expect(results.some((r) => r.sectionId === 'variables')).toBe(true)
  })

  it('finds concept by partial match', () => {
    const results = search(index, 'arrow')
    expect(results.some((r) => r.conceptId === 'arrow')).toBe(true)
  })

  it('is case-insensitive', () => {
    const results = search(index, 'ARROW')
    expect(results.some((r) => r.conceptId === 'arrow')).toBe(true)
  })

  it('ranks exact matches higher than partial matches', () => {
    const results = search(index, 'functions')
    const exactIdx = results.findIndex((r) => r.sectionId === 'functions' && !r.conceptId)
    const partialIdx = results.findIndex((r) => r.conceptId === 'arrow')
    expect(exactIdx).toBeLessThan(partialIdx === -1 ? Infinity : partialIdx)
  })

  it('returns at most 8 results', () => {
    const bigIndex = buildIndex([
      ...MOCK_SECTIONS,
      {
        id: 'extra',
        slug: 'extra',
        group: 'basics',
        title: 'Extra Section',
        description: '',
        concepts: Array.from({ length: 10 }, (_, i) => ({
          id: `c${i}`,
          title: `Concept ${i} variables`,
          panels: [],
        })),
      },
    ])
    const results = search(bigIndex, 'var')
    expect(results.length).toBeLessThanOrEqual(8)
  })

  it('returns conceptId on concept results', () => {
    const results = search(index, 'constant')
    const match = results.find((r) => r.conceptId === 'const')
    expect(match).toBeDefined()
    expect(match?.sectionId).toBe('variables')
  })

  it('returns no conceptId on section-level results', () => {
    const results = search(index, 'tool equivalents')
    const match = results.find((r) => r.sectionId === 'ecosystem')
    expect(match?.conceptId).toBeUndefined()
  })
})

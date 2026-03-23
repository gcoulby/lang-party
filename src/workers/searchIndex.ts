import type { Section } from '../types/content'

export interface SearchResult {
  sectionId: string
  sectionTitle: string
  conceptId?: string
  conceptTitle?: string
  label: string
}

interface IndexEntry {
  sectionId: string
  sectionTitle: string
  conceptId?: string
  conceptTitle?: string
  searchText: string
  label: string
}

export function buildIndex(sections: Section[]): IndexEntry[] {
  const entries: IndexEntry[] = []

  for (const section of sections) {
    entries.push({
      sectionId: section.id,
      sectionTitle: section.title,
      searchText: section.title.toLowerCase(),
      label: section.title,
    })

    for (const concept of section.concepts) {
      entries.push({
        sectionId: section.id,
        sectionTitle: section.title,
        conceptId: concept.id,
        conceptTitle: concept.title,
        searchText: concept.title.toLowerCase(),
        label: `${concept.title} — ${section.title}`,
      })
    }
  }

  return entries
}

export function search(index: IndexEntry[], query: string): SearchResult[] {
  const q = query.trim().toLowerCase()
  if (q.length === 0) return []

  const scored: { entry: IndexEntry; score: number }[] = []

  for (const entry of index) {
    const t = entry.searchText
    if (t === q) {
      scored.push({ entry, score: 3 })
    } else if (t.startsWith(q)) {
      scored.push({ entry, score: 2 })
    } else if (t.includes(q)) {
      scored.push({ entry, score: 1 })
    }
  }

  scored.sort((a, b) => b.score - a.score)

  return scored.slice(0, 8).map(({ entry }) => ({
    sectionId: entry.sectionId,
    sectionTitle: entry.sectionTitle,
    conceptId: entry.conceptId,
    conceptTitle: entry.conceptTitle,
    label: entry.label,
  }))
}

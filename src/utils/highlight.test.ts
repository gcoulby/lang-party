import { describe, it, expect } from 'vitest'
import { highlight } from './highlight'
import type { TokenType } from './highlight'

function types(code: string, lang: Parameters<typeof highlight>[1]): TokenType[] {
  return highlight(code, lang).map((t) => t.type)
}

function values(code: string, lang: Parameters<typeof highlight>[1]): string[] {
  return highlight(code, lang).map((t) => t.value)
}

describe('highlight — comments', () => {
  it('tokenises single-line comments', () => {
    const tokens = highlight('// hello world', 'js')
    expect(tokens).toHaveLength(1)
    expect(tokens[0]).toEqual({ type: 'comment', value: '// hello world' })
  })

  it('tokenises multi-line comments', () => {
    const tokens = highlight('/* block */', 'java')
    expect(tokens).toHaveLength(1)
    expect(tokens[0]).toEqual({ type: 'comment', value: '/* block */' })
  })

  it('stops single-line comment at newline', () => {
    const result = highlight('// comment\ncode', 'ts')
    expect(result[0]).toEqual({ type: 'comment', value: '// comment' })
    expect(result[result.length - 1].value).toBe('code')
  })
})

describe('highlight — strings', () => {
  it('tokenises double-quoted strings', () => {
    const tokens = highlight('"hello"', 'java')
    expect(tokens).toHaveLength(1)
    expect(tokens[0]).toEqual({ type: 'string', value: '"hello"' })
  })

  it('tokenises single-quoted strings', () => {
    const tokens = highlight("'world'", 'js')
    expect(tokens).toHaveLength(1)
    expect(tokens[0]).toEqual({ type: 'string', value: "'world'" })
  })

  it('tokenises template literals', () => {
    const tokens = highlight('`foo ${bar}`', 'ts')
    expect(tokens[0]).toEqual({ type: 'string', value: '`foo ${bar}`' })
  })

  it('handles escaped quotes inside strings', () => {
    const tokens = highlight('"say \\"hi\\""', 'js')
    expect(tokens[0].type).toBe('string')
    expect(tokens[0].value).toBe('"say \\"hi\\""')
  })
})

describe('highlight — numbers', () => {
  it('tokenises integers', () => {
    expect(types('42', 'js')).toEqual(['number'])
  })

  it('tokenises floats', () => {
    expect(types('3.14', 'ts')).toEqual(['number'])
  })

  it('tokenises hex literals', () => {
    expect(types('0xFF', 'cpp')).toEqual(['number'])
  })

  it('tokenises binary literals', () => {
    expect(types('0b1010', 'java')).toEqual(['number'])
  })

  it('tokenises long suffix', () => {
    const t = highlight('100L', 'java')
    expect(t[0]).toEqual({ type: 'number', value: '100L' })
  })
})

describe('highlight — keywords', () => {
  it('tokenises Java keywords', () => {
    expect(types('public', 'java')).toEqual(['keyword'])
    expect(types('void', 'java')).toEqual(['keyword'])
    expect(types('class', 'java')).toEqual(['keyword'])
  })

  it('tokenises C++ keywords', () => {
    expect(types('namespace', 'cpp')).toEqual(['keyword'])
    expect(types('constexpr', 'cpp')).toEqual(['keyword'])
    expect(types('nullptr', 'cpp')).toEqual(['keyword'])
  })

  it('tokenises JS keywords', () => {
    expect(types('const', 'js')).toEqual(['keyword'])
    expect(types('async', 'js')).toEqual(['keyword'])
    expect(types('await', 'js')).toEqual(['keyword'])
  })

  it('tokenises TS-only keywords', () => {
    expect(types('interface', 'ts')).toEqual(['keyword'])
    expect(types('readonly', 'ts')).toEqual(['keyword'])
    expect(types('keyof', 'ts')).toEqual(['keyword'])
  })

  it('does not tokenise TS keyword as keyword in JS', () => {
    expect(types('interface', 'js')).not.toContain('keyword')
  })
})

describe('highlight — types', () => {
  it('tokenises PascalCase identifiers as type in Java', () => {
    expect(types('String', 'java')).toEqual(['type'])
    expect(types('ArrayList', 'java')).toEqual(['type'])
  })

  it('tokenises PascalCase identifiers as type in TS', () => {
    expect(types('MyClass', 'ts')).toEqual(['type'])
  })

  it('does not tokenise lowercase identifiers as type', () => {
    expect(types('foo', 'ts')).toEqual(['text'])
  })
})

describe('highlight — function names', () => {
  it('tokenises identifier before ( as fn', () => {
    const t = highlight('foo(', 'js')
    expect(t[0]).toEqual({ type: 'fn', value: 'foo' })
  })

  it('tokenises keyword followed by ( as keyword not fn', () => {
    const t = highlight('if(', 'java')
    expect(t[0]).toEqual({ type: 'keyword', value: 'if' })
  })
})

describe('highlight — operators', () => {
  it('tokenises === as single op', () => {
    expect(values('===', 'js')).toEqual(['==='])
    expect(types('===', 'js')).toEqual(['op'])
  })

  it('tokenises => as single op', () => {
    expect(values('=>', 'ts')).toEqual(['=>'])
  })

  it('tokenises -> as single op (C++)', () => {
    expect(values('->', 'cpp')).toEqual(['->'])
  })

  it('tokenises :: as single op (C++/Java)', () => {
    expect(values('::', 'cpp')).toEqual(['::'])
  })
})

describe('highlight — mixed code', () => {
  it('tokenises a simple Java declaration', () => {
    const t = highlight('int x = 42;', 'java')
    expect(t.find((tok) => tok.type === 'keyword')?.value).toBe('int')
    expect(t.find((tok) => tok.type === 'number')?.value).toBe('42')
  })

  it('tokenises a TS arrow function signature', () => {
    const t = highlight('const add = (a: number, b: number): number =>', 'ts')
    expect(t.find((tok) => tok.value === 'const')?.type).toBe('keyword')
    expect(t.find((tok) => tok.value === 'number')?.type).toBe('keyword')
  })

  it('tokenises a JS function call', () => {
    const t = highlight('console.log("hi")', 'js')
    expect(t.find((tok) => tok.value === 'log')?.type).toBe('fn')
    expect(t.find((tok) => tok.type === 'string')?.value).toBe('"hi"')
  })

  it('produces non-empty output for empty string', () => {
    expect(highlight('', 'ts')).toHaveLength(0)
  })
})

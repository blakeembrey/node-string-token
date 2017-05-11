import { stringToken, DEFAULT_CHARS } from './index'

describe('string token', () => {
  it('should generate a token from alphanumeric chars', async () => {
    const token = await stringToken(32)

    expect(token).toMatch(/^[a-zA-Z0-9]{32}$/)
  })

  it('should be unique', async () => {
    const unique = Object.create(null)
    const tokens: Promise<string>[] = []

    for (let i = 0; i < 10000; i++) {
      tokens.push(stringToken(32))
    }

    await Promise.all(tokens).then((tokens) => {
      for (const token of tokens) {
        expect(unique[token]).not.toBe(true)
        unique[token] = true
      }
    })
  })

  it('should have no bias', async () => {
    const counts = Object.create(null)
    const tokens: Promise<string>[] = []

    for (let i = 0; i < 10000; i++) {
      tokens.push(stringToken(32))
    }

    const str = (await Promise.all(tokens)).join('')

    for (const char of str) {
      counts[char] = (counts[char] || 0) + 1
    }

    const avg = str.length / DEFAULT_CHARS.length
    const errors: string[] = []

    for (const char of Object.keys(counts)) {
      const diff = counts[char] / avg

      if (diff < 0.95 || diff > 1.05) {
        errors.push(`Biased "${char}", got ${counts[char]}, avg ${avg.toFixed(2)}`)
      }
    }

    expect(errors).toEqual([])
  })
})

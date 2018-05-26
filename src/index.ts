import { randomBytes } from 'crypto'

export const MAX_CHARS = Math.pow(2, 8)
export const DEFAULT_CHARS = '~_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

/**
 * Generate a string token function.
 */
export function createStringToken (chars = DEFAULT_CHARS) {
  const mask = chars.length - 1

  // Check for valid powers of 2 to work with.
  if ((chars.length & mask) !== 0) {
    throw new TypeError('The pool of characters must be a power of two')
  }

  if (chars.length > MAX_CHARS) {
    throw new TypeError(`The pool of characters can not exceed ${MAX_CHARS}`)
  }

  return function (len: number) {
    return new Promise<string>((resolve, reject) => {
      return randomBytes(len, (err, buf) => {
        if (err) return reject(err)

        let token = ''

        while (len-- > 0) token += chars.charAt(buf.readUInt8(len) & mask)

        return resolve(token)
      })
    })
  }
}

/**
 * Generate a cryptographically secure
 */
export const stringToken = createStringToken(DEFAULT_CHARS)

import { randomBytes } from 'crypto'

/**
 * The default set of characters to use.
 */
export const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

/**
 * Generate a cryptographically secure
 */
export function stringToken (len: number, chars: string = DEFAULT_CHARS) {
  return new Promise<string>((resolve, reject) => {
    return randomBytes(len, (err, buf) => {
      if (err) return reject(err)

      let token = ''
      let cursor = 0

      for (let i = 0; i < buf.length; i++) {
        cursor = (cursor + buf.readUInt8(i)) % chars.length
        token += chars.charAt(cursor)
      }

      return resolve(token)
    })
  })
}

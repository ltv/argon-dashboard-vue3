import has from 'lodash/has'
import trim from 'lodash/trim'

const metaEnv: any = import.meta.env

type EnvFunc = <T = unknown>(key: string, defaultValue?: T) => T
type Utils = {
  string: (key: string, defaultValue?: string) => string | undefined
  int: (key: string, defaultValue?: number) => number | undefined
  float: (key: string, defaultValue?: number) => number | undefined
  bool: (key: string, defaultValue?: boolean) => boolean | undefined
  json: <T = unknown>(key: string, defaultValue?: T) => T | undefined
  array: (key: string, defaultValue?: string[]) => string[] | undefined
  date: (key: string, defaultValue?: Date) => Date | undefined
}

const utils: Utils = {
  /**
   * Get string from environment
   *
   * @param key string
   * @param defaultValue string
   * @returns string
   */
  string(key: string, defaultValue?: string): string | undefined {
    return has(metaEnv, key) ? metaEnv[key] : defaultValue
  },

  /**
   * Get integer from environment
   *
   * @param key string
   * @param defaultValue integer number
   * @returns integer number
   */
  int(key: string, defaultValue?: number): number | undefined {
    if (!has(metaEnv, key)) {
      return defaultValue
    }

    const value = metaEnv[key] || ''
    return parseInt(value, 10)
  },

  /**
   * Get float from environment
   *
   * @param key string
   * @param defaultValue float number
   * @returns float number
   */
  float(key: string, defaultValue?: number): number | undefined {
    if (!has(metaEnv, key)) {
      return defaultValue
    }

    const value = metaEnv[key] || ''
    return parseFloat(value)
  },

  /**
   * Get boolean from environment
   *
   * @param key string
   * @param defaultValue boolean
   * @returns boolean
   */
  bool(key: string, defaultValue?: boolean): boolean | undefined {
    if (!has(metaEnv, key)) {
      return defaultValue
    }

    const value = metaEnv[key]
    return value === 'true'
  },

  /**
   * Get JSON object from environment
   *
   * @param key string
   * @param defaultValue string
   * @returns object
   */
  json<T = unknown>(key: string, defaultValue?: T): T | undefined {
    if (!has(metaEnv, key)) {
      return defaultValue
    }

    const value = metaEnv[key] || ''
    try {
      return JSON.parse(value)
    } catch (error: any) {
      throw new Error(
        `Invalid json environment variable ${key}: ${error.message}`,
      )
    }
  },

  /**
   * Get string array from environment
   *
   * @param key string
   * @param defaultValue string[]
   * @returns string[]
   */
  array(key: string, defaultValue?: string[]): string[] | undefined {
    if (!has(metaEnv, key)) {
      return defaultValue
    }

    let value = metaEnv[key] || ''

    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.substring(1, value.length - 1)
    }

    return value.split(',').map((v: string) => {
      return trim(trim(v, ' '), '"')
    })
  },

  /**
   * Get Date object from environment
   *
   * @param key string
   * @param defaultValue Date
   * @returns Date
   */
  date(key: string, defaultValue?: Date): Date | undefined {
    if (!has(metaEnv, key)) {
      return defaultValue
    }

    const value = metaEnv[key] || ''
    return new Date(value)
  },
}

/**
 * Get data from environment
 *
 * @param key string
 * @param defaultValue <T = any>
 * @returns T
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function env(key: string, defaultValue?: any) {
  return has(metaEnv, key) ? metaEnv[key] : defaultValue
}

export default Object.assign<EnvFunc, Utils>(env, utils)

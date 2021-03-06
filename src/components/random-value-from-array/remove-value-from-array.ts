/**
 * @description
 * random value from array
 * @param {any[]} array an array to return random value
 * @returns {any} random value
 * @example
 * import { randomValueFromArray } from '@bit/joshk.jotils.random-value-from-array'
 * export default randomValueFromArray([1,2,3]) // => 2
 */
import { randomBetween } from '../random-between'

export function randomValueFromArray(array: Array<any>): any {
    return array[randomBetween(0, array.length - 1)]
}

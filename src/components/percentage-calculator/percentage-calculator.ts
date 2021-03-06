/**
 * @description
 * calculate percentage of value inside another value
 * @param {number} partialValue
 * @param {number} totalValue
 * @returns {number} percentage
 * @example
 * import { percentageCalculator } from '@bit/joshk.jotils.percentage-calculator'
 * export default percentageCalculator(50, 100) // => 50
 */
export function percentageCalculator(partialValue: number, totalValue: number): number {
    return (partialValue / totalValue) * 100
}

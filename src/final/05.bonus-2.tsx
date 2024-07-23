"use client"
// Overloads
// 🚀 type de retour différent
// http://localhost:3000/alone/final/02.ts

// ❌ NE PAS MODIFIER
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

type InputDate = string | number | Date

function printBirthDay(year: number, month: number, day: number): string
function printBirthDay(year: number, month: number): string
function printBirthDay(year: number): string
function printBirthDay(inputDate: Date): Date
function printBirthDay(inputDate: string): string
function printBirthDay(inputDate: InputDate, m?: number, d?: number) {
  if (inputDate instanceof Date) {
    return inputDate
  } else if (typeof inputDate === 'string') {
    return new Date(inputDate).toLocaleDateString()
  } else if (d !== undefined && m !== undefined) {
    return new Date(inputDate, m, d).toLocaleDateString()
  } else if (m !== undefined) {
    return new Date(inputDate, m, 1).toLocaleDateString()
  } else if (typeof inputDate === 'number') {
    return new Date(inputDate, 0, 1).toLocaleDateString()
  } else {
    return 'Non définie'
  }
}

displayText(`${printBirthDay('October 13, 2014')}`)
displayText(`${printBirthDay(new Date(2014, 9, 13)).toLocaleDateString()}`)
displayText(`${printBirthDay(2014, 9, 13)}`)
displayText(`${printBirthDay(2014, 9)}`)
displayText(`${printBirthDay(2014)}`)

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;
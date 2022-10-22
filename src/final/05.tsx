// Overloads
// http://localhost:3000/alone/final/02.ts

// ❌ NE PAS MODIFIER
import displayText, {init} from './helper/exerciseHelper'
init()

function printBirthDay(inputDate: Date): string
function printBirthDay(inputDate: string): string
function printBirthDay(inputDate: string | Date): string {
  if (inputDate instanceof Date) {
    return inputDate.toLocaleDateString()
  } else if (typeof inputDate === 'string') {
    return new Date(inputDate).toLocaleDateString()
  } else {
    return 'Non défini'
  }
}

displayText(`${printBirthDay('October 13, 2014')}`)
displayText(`${printBirthDay(new Date(2014, 9, 13))}`)

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/

"use client"
// Unknown props
// http://localhost:3000/alone/exercise/04.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice

// 🐶 Change le type 'any' de la fonction 'printBirthDay' pour accepter des 'string' ou des 'Date'
// et specifie 'string' comme type de retour de la fonction

// 🐶 ajoute 2 overloads
// - inputDate de type Date
// - inputDate de type string
function printBirthDay(inputDate: any): any {
  // 🐶 Si 'inputDate' est de type 'Date'
  // retourne directement 'inputDate.toLocaleDateString()'
  //
  // 🐶 Si 'inputDate' est de type 'string'
  // retourne new Date(inputDate).toLocaleDateString()
  //
  // sinon retourne 'Non défini'
}
// ⛏️ Décommente le code ci-dessous pour afficher les dates
//
// displayText(`${printBirthDay('October 13, 2014')}`)
// displayText(`${printBirthDay(new Date(2014, 9, 13))}`)

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;
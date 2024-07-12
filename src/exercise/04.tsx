"use client"
// Unknown props
// http://localhost:3000/alone/exercise/04.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice

// 🐶 Créé l'interface 'Club' permettant d'avoir un objet dont les propiétés ne sont pas connus à l'avance
// nous savons seulement que ces propriétés contiendront des 'object'

// 🐶 Créé le club 'machesterUnited' avec 'cristianoRonaldo' et 'paulPogba'
// 🐶 Créé le club 'psg' avec 'messi' et 'mbappe'

// ⛏️ Décommente le code ci-dessous pour afficher le nombre de joueur dans l'équipe
//
// displayText(
//   `Machester United nb player : ${Object.keys(machesterUnited).length}`,
// )
// displayText(`psg nb player : ${Object.keys(psg).length}`)

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;
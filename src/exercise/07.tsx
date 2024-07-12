"use client"
// Unknown props
// http://localhost:3000/alone/exercise/04.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice

// 🐶 Créé la classe Game avec toutes les propriétés

class Game {
  // 🐶 déclare tous les champs dans un premier temps
  // - title
  // - category
  // - price
  // - pegi
  // - studio
  // - hardware -> array
  // 🐶 créé le 'constructor'
  // 🐶 créé la méthode 'isPC' en te basant sur le champs 'hardware'
  // 🐶 créé la méthode 'getDiscount' en te basant sur le champs 'price'
}

// 🐶 créé le jeu FIFA dispo sur PC et plus
// 🐶 créé le jeu MARIO dispo sur WII seulement

// ⛏️ décommente pour afficher les jeux à l'écran
// displayText(
//   `Le jeu : ${fifa.title} est compatible pc ? ${fifa.isPC() ? ' oui' : 'non'}`,
// )
// displayText(
//   `Le jeu : ${mario.title} est compatible pc ? ${
//     mario.isPC() ? ' oui' : 'non'
//   }`,
// )

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;
// Les opérateurs
// http://localhost:3000/alone/exercise/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice

// 🐶 Créé un type User avec les propriétés suivantes :
// username -> obligatoire
// name -> obligatoire
// verified -> boolean obligatoire
// blocked -> boolean obligatoire
// adress -> optionnel
// sexe -> optionnel

type User = {}

// 🐶 Créé user1 de type User sans address
// 🐶 Créé user2 de type User avec address

// 🐶 implétemente 'isBlocked' avec les caracteristiques
// - rends le paramètre 'user' optionnel et modifie le type 'any'
function isBlocked(user: any) {
  // 🐶 retourne 'true' si 'blocked' est a 'true' sinon 'false'
  // 🐶 Astuce : utilise le l'optionnal chaining et Nullish coalescing operator
  // 📝 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
}

// 🐶 implétemente 'isVerified' avec les caracteristiques
// - rends le paramètre 'user' optionnel et modifie le type 'any'
function isVerified(user: any) {
  // 🐶 retourne 'true' si 'verified' est a 'true' sinon 'false'
}

// 🐶 implétemente 'containAdress' avec les caracteristiques
// - rends le paramètre 'user' optionnel et modifie le type 'any'
function containAdress(user: any) {
  // 🐶 retourne 'true' si une adresse est présente sinon 'false'
}

// ⛏️ décommente les lignes ci-dessous et vérifie que ca fonctionne correctement
//
// displayText(`${user1.name} blocked ? ${isBlocked(user1)}`)
// displayText(`${user1.name} isVerified ? ${isVerified(user1)}`)
// displayText(`${user1.name} containAdress ? ${containAdress(user1)}`)

// displayText(`${user2.name} blocked ? ${isBlocked(user2)}`)
// displayText(`${user2.name} isVerified ? ${isVerified(user2)}`)
// displayText(`${user2.name} containAdress ? ${containAdress(user2)}`)
/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/

"use client"
// Les fonctions
// http://localhost:3000/alone/exercise/08.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice

// 🐶 rend la class 'Book' abtraite
class Book {
  private author: string
  private title: string

  constructor(author: string, title: string) {
    this.author = author
    this.title = title
  }
  // 🐶 créé la méthode 'getTitle' qui retourne 'title'
  // 🐶 créé la méthode 'getAuthor' qui retourne 'author'
  //
  // 🐶 créé la méthode abstraite 'getType' qui sera implementé par les enfants
}

// 🐶 rend la class 'PDF', une classe concrete de 'Book'
class PDF {}
// 🐶 rend la class 'EPUB', une classe concrete de 'Book'
class EPUB {}

// 🐶 instancie 2 livres
// const harryPotter = new PDF('Harry Potter', 'JKR')
// const indianaJone = new EPUB('indiana Jone', 'Unkonw')

// 🐶 créé une fonction 'displayBook' qui affiche le detail d'un livre avec
// displayText(
//   `Livre ${book.getTitle()} autheur : ${book.getAuthor()} type ${book.getType()}`,
// )

// 🐶 appelle 'displayBook' pour chaque livre

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;
"use client"
// Les fonctions
// http://localhost:3000/alone/exercise/08.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

abstract class Book {
  private author: string
  private title: string

  constructor(author: string, title: string) {
    this.author = author
    this.title = title
  }
  public getTitle(): string {
    return this.title
  }

  public getAuthor(): string {
    return this.title
  }

  abstract getType(): string // No implementation
}

class PDF extends Book {
  getType(): string {
    return 'PDF'
  }
}
class EPUB extends Book {
  getType(): string {
    return 'EPUB'
  }
}

const harryPotter = new PDF('Harry Potter', 'JKR')
const indianaJone = new EPUB('indiana Jone', 'Unkonw')

function displayBook(book: Book) {
  displayText(
    `Livre ${book.getTitle()} autheur : ${book.getAuthor()} type ${book.getType()}`,
  )
}
displayBook(harryPotter)
displayBook(indianaJone)
/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;
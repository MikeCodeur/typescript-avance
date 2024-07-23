"use client"
// Les fonctions
// http://localhost:3000/alone/exercise/08.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice

// 🐶 change "code" en private dans un premier temps et regarde le problème lié a getCode()
// adapte dans un second temps
class User {
  public name: string
  public code: number

  constructor(name: string, code: number) {
    this.name = name
    this.code = code
  }
}

class GuestUser extends User {
  private department: string

  constructor(name: string, code: number, department: string) {
    super(name, code)
    this.department = department
  }
  getCode() {
    if (this.check()) {
      return this.code
    }
  }
  check() {
    return true
  }
}

let user = new GuestUser('John Smith', 123, 'Sales')
// 🐶 utilise 'getCode'
displayText(`Le code user : ${user.code}`)

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;
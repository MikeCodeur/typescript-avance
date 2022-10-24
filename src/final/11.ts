// Les fonctions
// http://localhost:3000/alone/exercise/08.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

class User {
  public name: string
  protected code: number

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
displayText(`Le code user : ${user.getCode()}`)

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/

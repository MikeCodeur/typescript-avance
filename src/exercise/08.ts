// Unknown props
// http://localhost:3000/alone/exercise/04.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice

// 🐶 Modifie la classe Game en la simplifiant avec les racourcis
class Game {
  // ⛏️ supprime les propriétés suivante
  title: string
  category: string
  price: number
  pegi: string
  studio: string
  hardware: string[]
  constructor(
    // 🐶 ajoute la visibilité public
    title: string,
    category: string,
    price: number,
    pegi: string,
    studio: string,
    hardware: string[],
  ) {
    // ⛏️ supprime l'implementation du constructeur
    this.title = title
    this.category = category
    this.price = price
    this.pegi = pegi
    this.studio = studio
    this.hardware = hardware
  }
  isPC() {
    return this.hardware.includes('PC')
  }
  getDiscount(d: number) {
    return this.price * d
  }
}

const fifa = new Game('Fifa', '', 79.9, '', '', ['PC', 'PS5', 'XBOX'])
displayText(
  `Le jeu : ${fifa.title} est compatible pc ? ${fifa.isPC() ? ' oui' : 'non'}`,
)
const mario = new Game('Mario', '', 59.9, '', '', ['Wii'])
displayText(
  `Le jeu : ${mario.title} est compatible pc ? ${
    mario.isPC() ? ' oui' : 'non'
  }`,
)

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/

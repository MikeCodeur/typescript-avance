// Générics
// http://localhost:3000/alone/final/02.ts

// ❌ NE PAS MODIFIER
import displayText, {init} from './helper/exerciseHelper'
init()

class Game {
  constructor(
    public title: string,
    public category: string,
    public price: number,
    public pegi: string,
    public studio: string,
    public hardware: string[],
  ) {}
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

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
    protected pegi: string,
    public studio: string,
    private hardware: string[],
  ) {}
  isPC() {
    return this.hardware.includes('PC')
  }
  getDiscount(d: number) {
    return this.price * d
  }
}

class IphoneGame extends Game {
  constructor(public title: string, public price: number, public esrb: string) {
    super(title, 'Mobile', price, esrb.includes('AO') ? 'PEGI18' : '', '', [
      'IOS',
    ])
  }
  isAdult() {
    return this.pegi.includes('PEGI18')
  }
}
const adultGame = new IphoneGame('GTA6', 79.9, 'AO')
displayText(
  `Le jeu : ${adultGame.title} est pour adulte ? ${
    adultGame.isAdult() ? ' oui' : 'non'
  }`,
)

const fifa = new Game('Fifa', '', 79.9, '', '', ['PC', 'PS5', 'XBOX'])
displayText(
  `Le jeu : ${fifa.title} est compatible pc ? ${fifa.isPC() ? ' oui' : 'non'}`,
)
const mario = new Game('Mario', '', 59.9, '', '', ['Wii'])
//mario.hardware.push('PC') //compile error
displayText(
  `Le jeu : ${mario.title} est compatible pc ? ${
    mario.isPC() ? ' oui' : 'non'
  }`,
)
/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/

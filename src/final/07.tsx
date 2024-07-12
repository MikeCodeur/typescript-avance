"use client"
// Générics
// http://localhost:3000/alone/final/02.ts

// ❌ NE PAS MODIFIER
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

class Game {
  title: string
  category: string
  price: number
  pegi: string
  studio: string
  hardware: string[]
  constructor(
    title: string,
    category: string,
    price: number,
    pegi: string,
    studio: string,
    hardware: string[],
  ) {
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
};
export default () => <App exercice={exercice} />;
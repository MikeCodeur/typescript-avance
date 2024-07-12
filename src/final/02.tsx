"use client"
// Intersections - Unions
// http://localhost:3000/alone/final/02.ts

// ❌ NE PAS MODIFIER
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

type Developper = {
  name: string
}
type FrontEndDev = Developper & {
  frontEndFramework: string
}

type BackEndDev = Developper & {
  backEndFramework: string
}

type FullStackDev = FrontEndDev & BackEndDev

const feDev: FrontEndDev = {
  name: 'john',
  frontEndFramework: 'React',
}

const beDev: BackEndDev = {
  name: 'mike',
  backEndFramework: 'Spring',
}

const fsDev: FullStackDev = {
  name: 'steeve',
  backEndFramework: 'Spring',
  frontEndFramework: 'React',
}
displayText(`${feDev.name} utilise ${feDev.frontEndFramework} `)
displayText(`${beDev.name} utilise ${beDev.backEndFramework} `)
displayText(
  `${fsDev.name} utilise ${fsDev.frontEndFramework} et ${fsDev.backEndFramework}`,
)
};
export default () => <App exercice={exercice} />;
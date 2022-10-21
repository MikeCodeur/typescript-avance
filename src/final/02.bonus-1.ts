// Intersections - Unions
// 🚀 Interface et extends
// http://localhost:3000/alone/final/02.bonus-1.ts

// ❌ NE PAS MODIFIER
import displayText, {init} from './helper/exerciseHelper'
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

// Interfaces
interface IDevelopper {
  name: string
}
interface IFrontEndDev extends IDevelopper {
  frontEndFramework: string
}
interface IBackEndDev extends IDevelopper {
  backEndFramework: string
}
interface IFullStackDev extends IBackEndDev, IFrontEndDev {}

const ifeDev: IFrontEndDev = {
  name: 'john',
  frontEndFramework: 'React',
}

const ibeDev: IBackEndDev = {
  name: 'mike',
  backEndFramework: 'Spring',
}

const ifsDev: IFullStackDev = {
  name: 'steeve',
  backEndFramework: 'Spring',
  frontEndFramework: 'React',
}
displayText(`${ifeDev.name} utilise ${ifeDev.frontEndFramework} `)
displayText(`${ibeDev.name} utilise ${ibeDev.backEndFramework} `)
displayText(
  `${ifsDev.name} utilise ${fsDev.frontEndFramework} et ${ifsDev.backEndFramework}`,
)

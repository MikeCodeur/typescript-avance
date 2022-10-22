// Unknown props
// 🚀 Spécification de la propriété inconnue
// http://localhost:3000/alone/final/04.bonus-1.ts

// ❌ NE PAS MODIFIER
import displayText, {init} from './helper/exerciseHelper'
init()

type Player = {
  id: string
  stats: string
}
interface Club {
  [key: string]: Player
}
const machesterUnited: Club = {
  cristianoRonaldo: {id: '342', stats: '50buts'},
  paulPogba: {id: '234', stats: '34buts'},
}

const psg: Club = {
  messi: {id: '123', stats: '53buts'},
  mbappe: {id: '545', stats: '76buts'},
}

displayText(
  `cristianoRonaldo stats : ${machesterUnited.cristianoRonaldo.stats}`,
)

displayText(`mbappe stats : ${psg.mbappe.stats}`)

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/

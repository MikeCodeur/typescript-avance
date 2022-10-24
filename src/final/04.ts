// Unknown props
// http://localhost:3000/alone/final/02.ts

// ❌ NE PAS MODIFIER
import displayText, {init} from './helper/exerciseHelper'
init()

interface Club {
  [key: string]: object
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
  `Machester United nb player : ${Object.keys(machesterUnited).length}`,
)

displayText(`psg nb player : ${Object.keys(psg).length}`)
/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/

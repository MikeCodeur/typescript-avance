// Discriminated union & Narrowing
// 🚀 Narrowing
// http://localhost:3000/alone/final/03.bonus-1.ts

// ❌ NE PAS MODIFIER
import displayText, {init} from './helper/exerciseHelper'
init()

type JavaDev = {
  langage: 'JAVA'
  framework: string[]
}

type JSDev = {
  langage: 'JAVASCRIPT'
  framework: string[]
}

type PHPDev = {
  langage: 'PHP'
  framework: string[]
}

function helloDeveloppeur(dev: Developper) {
  if (dev.langage === 'JAVA') {
    return 'Hello developpeur Java'
  } else if (dev.langage === 'JAVASCRIPT') {
    return 'Hello developpeur JavaScript'
  } else if (dev.langage === 'PHP') {
    return 'Hello developpeur PHP'
  }
}
const devJava: JavaDev = {
  langage: 'JAVA',
  framework: ['spring', 'spring boot'],
}
const devJs: JSDev = {
  langage: 'JAVASCRIPT',
  framework: ['React', 'Vue'],
}
const devPHP: PHPDev = {
  langage: 'PHP',
  framework: ['React', 'Vue'],
}
displayText(`${helloDeveloppeur(devJava)}`)
displayText(`${helloDeveloppeur(devJs)}`)
displayText(`${helloDeveloppeur(devPHP)}`)

type BlockChainDev = {
  langage: string
  framework: string[]
  cryptoBlockChain: string
}

//Narrowing
type Developper = JavaDev | JSDev | PHPDev | BlockChainDev

function helloDeveloppeurWeb3(dev: Developper) {
  if ('cryptoBlockChain' in dev) {
    return 'Hello WEB 3 developpeur'
  } else {
    return 'Hello normal developpeur'
  }
}

const ethDev: BlockChainDev = {
  langage: 'JAVASCRIPT',
  framework: ['React', 'Solidity'],
  cryptoBlockChain: 'ETH',
}
displayText(`${helloDeveloppeurWeb3(devJava)}`)
displayText(`${helloDeveloppeurWeb3(ethDev)}`)

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/

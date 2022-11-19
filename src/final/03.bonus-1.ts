// Discriminated union & Narrowing
// 🚀 Narrowing
// http://localhost:3000/alone/final/03.bonus-1.ts

// ❌ NE PAS MODIFIER
import displayText, {init} from './helper/exerciseHelper'
init()

type JavaDev = {
  langage: 'JAVA'
  framework: string[]
  javaTools: string
}

type JSDev = {
  langage: 'JAVASCRIPT'
  framework: string[]
  jsTools: string
}

type PHPDev = {
  langage: 'PHP'
  framework: string[]
  phpTools: string
}

function helloDeveloppeur(dev: Developper) {
  if ('cryptoBlockChain' in dev) {
    return `Hello developpeur Blockchain ${dev.cryptoBlockChain}`
  } else {
    if (dev.langage === 'JAVA') {
      return `Hello developpeur Java ${dev.javaTools}`
    } else if (dev.langage === 'JAVASCRIPT') {
      return `Hello developpeur JavaScript ${dev.jsTools}`
    } else if (dev.langage === 'PHP') {
      return `Hello developpeur PHP ${dev.phpTools}`
    }
  }
}
const devJava: JavaDev = {
  langage: 'JAVA',
  framework: ['spring', 'spring boot'],
  javaTools: 'JDK',
}
const devJs: JSDev = {
  langage: 'JAVASCRIPT',
  framework: ['React', 'Vue'],
  jsTools: 'Postman',
}
const devPHP: PHPDev = {
  langage: 'PHP',
  framework: ['React', 'Vue'],
  phpTools: 'PHPdebug',
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

const ethDev: BlockChainDev = {
  langage: 'JAVASCRIPT',
  framework: ['React', 'Solidity'],
  cryptoBlockChain: 'ETH',
}
displayText(`${helloDeveloppeur(devJava)}`)
displayText(`${helloDeveloppeur(ethDev)}`)

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/

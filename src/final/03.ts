// Discriminated union & Narrowing
// http://localhost:3000/alone/final/02.ts

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

type Developper = JavaDev | JSDev | PHPDev

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

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/

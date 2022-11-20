// Discriminated union & Narrowing
// http://localhost:3000/alone/exercise/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice
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
// 🐶 créé le type 'Developper' qui est l'union des 3 types de dev ci-dessus

// 🐶 change 'any'
function helloDeveloppeur(dev: any) {
  // 🐶 identifie (discrimine) le bon type de Developper en te basant sur 'langage'
  // returne la bonne chaine de caractère en fonction du langage
  // Hello developpeur Java
  // Hello developpeur JavaScript
  // Hello developpeur PHP
}

// 🐶 créé 3 devs (devJava, devJs, devPHP)

// ⛏️ décommente
// displayText(`${helloDeveloppeur(devJava)}`)
// displayText(`${helloDeveloppeur(devJs)}`)
// displayText(`${helloDeveloppeur(devPHP)}`)

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/

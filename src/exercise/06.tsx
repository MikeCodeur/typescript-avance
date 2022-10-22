// Unknown props
// http://localhost:3000/alone/exercise/04.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice

// 🐶 Modifie le type Configuration pour que 'data' soit soit générique et que puisse
// y mettre un array de Type (array de string, array de number etc ...)
type Configuration = {
  name: string
  protocol: string
  hostname: string
  ip: string
  port: number
  data: any
}
// 🐶 Adapte cette déclation pour que 'data' soit un array de string
const config: Configuration = {
  name: 'connexion',
  protocol: 'HTTPS',
  hostname: 'google.com',
  ip: '192.168.0.1',
  port: 80,
  data: ['secure', 'open'],
}
// 🐶 Adapte cette déclation pour que 'data' soit un array d'objet
const config2: Configuration = {
  name: 'connexion',
  protocol: 'HTTPS',
  hostname: 'google.com',
  ip: '192.168.0.1',
  port: 80,
  data: [{secure: true}, {open: true}],
}

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/

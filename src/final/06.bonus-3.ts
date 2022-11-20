// Générics
// 🚀 limitation avec T extends
// http://localhost:3000/alone/final/02.ts

// ❌ NE PAS MODIFIER
import displayText, {init} from './helper/exerciseHelper'
init()

type Configuration<T> = {
  name: string
  protocol: string
  hostname: string
  ip: string
  port: number
  data: T[]
}

const config: Configuration<string> = {
  name: 'connexion',
  protocol: 'HTTPS',
  hostname: 'google.com',
  ip: '192.168.0.1',
  port: 80,
  data: ['secure', 'open'],
}

const config2: Configuration<object> = {
  name: 'connexion',
  protocol: 'HTTPS',
  hostname: 'google.com',
  ip: '192.168.0.1',
  port: 80,
  data: [{secure: true}, {open: true}],
}

function makePair<T extends Configuration<any>>(arg: T): [T, T] {
  return [arg, arg]
}

const pConfig = makePair<Configuration<string>>(config)
const pConfig2 = makePair<Configuration<object>>(config2)

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/

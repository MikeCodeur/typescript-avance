// Générics
// 🚀 limitation avec T extends
// http://localhost:3000/alone/final/02.ts

// ❌ NE PAS MODIFIER
import displayText, {init} from './helper/exerciseHelper'
init()

type Configuration<T, V> = {
  name: string
  protocol: string
  hostname: string
  ip: string
  port: number
  data: T[]
  metaData: V[]
}

const config: Configuration<string, number> = {
  name: 'connexion',
  protocol: 'HTTPS',
  hostname: 'google.com',
  ip: '192.168.0.1',
  port: 80,
  data: ['secure', 'open'],
  metaData: [50, 50],
}

const config2: Configuration<object, string> = {
  name: 'connexion',
  protocol: 'HTTPS',
  hostname: 'google.com',
  ip: '192.168.0.1',
  port: 80,
  data: [{secure: true}, {open: true}],
  metaData: ['hello', 'world'],
}

function makePair<T extends Configuration<any, any>>(arg: T): [T, T] {
  return [arg, arg]
}

const pConfig = makePair<Configuration<string, number>>(config)
const pConfig2 = makePair<Configuration<object, string>>(config2)

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/

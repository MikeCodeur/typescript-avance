"use client"
// Générics
// 🚀 fabriquer une Paire
// http://localhost:3000/alone/final/02.ts

// ❌ NE PAS MODIFIER
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
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

function makePair<T>(arg: T): [T, T] {
  return [arg, arg]
}
const p = makePair('mike') //p de type [string, string]
const p2 = makePair(2) //p de type [number, number]

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;
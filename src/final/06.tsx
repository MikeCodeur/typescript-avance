"use client"
// Générics
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

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;
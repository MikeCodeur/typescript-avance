// Les opérateurs
// http://localhost:3000/alone/final/01.bonus-1.ts
// 1. 🚀 throwAllUsersErrors
//
// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

type User = {
  username: string
  name: string
  verified: boolean
  blocked: boolean
  adress?: string
  sexe?: string
}

const user1: User = {
  username: 'john34234',
  name: 'john',
  blocked: true,
  verified: false,
}

const user2: User = {
  username: 'Jack203',
  name: 'jack',
  blocked: true,
  verified: true,
  adress: 'NY',
}

function isBlocked(user?: User) {
  return user?.blocked ?? false
}

function isVerified(user?: User) {
  return user?.verified ?? false
}

function containAdress(user?: User) {
  return user?.adress ? true : false
}

displayText(`${user1.name} blocked ? ${isBlocked(user1)}`)
displayText(`${user1.name} isVerified ? ${isVerified(user1)}`)
displayText(`${user1.name} containAdress ? ${containAdress(user1)}`)

displayText(`${user2.name} blocked ? ${isBlocked(user2)}`)
displayText(`${user2.name} isVerified ? ${isVerified(user2)}`)
displayText(`${user2.name} containAdress ? ${containAdress(user2)}`)

function throwAllUsersErrors(users: User[]): never {
  throw new Error(`il y a ${users.length} users en erreur `)
}

throwAllUsersErrors([user1, user2])

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/

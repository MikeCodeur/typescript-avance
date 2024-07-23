//DO NOT EDIT THIS FILE !!!!!

const EXO = 'exo'

export const init = (label = 'Exercice') => {
  const el = document.getElementById(EXO)
  if (el) {
    document.getElementById(EXO).parentNode.removeChild(el)
  }

  const exoDiv = document.createElement('div')
  const h2 = document.createElement('h2')
  h2.innerText = label
  exoDiv.setAttribute('id', EXO)
  exoDiv.appendChild(h2)
  document.getElementById('root').appendChild(exoDiv)
}

const displayText = label => {
  const exoDiv = document.getElementById(EXO)
  const p = document.createElement('p')
  p.innerText = label
  exoDiv.appendChild(p)
}

export default displayText

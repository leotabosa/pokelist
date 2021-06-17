import normalizeGeneration from './normalize-generation'

export default function normalizeName(name) {
  if (typeof name !== 'string') return ''

  const nameSplitted = name.split('-')
  let firstName = nameSplitted[0]

  firstName = `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)}`

  return `${firstName} ${normalizeGeneration(name)}`
}

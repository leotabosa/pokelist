export default function normalizeGeneration(name) {
  if (typeof name === 'string') return name.split('-')[1].toUpperCase()
  else return ''
}

import pokemonTypes from '../assets/pokemon-types'

export default function getPokemonType(type) {
  let found = pokemonTypes.find(({ name }) => name === type)
  if (found) return found
  return {}
}

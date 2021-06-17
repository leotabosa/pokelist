export default function getResourceId(url) {
  if (typeof url === 'string') return Number(url.split('/').slice(-2)[0])
  else return null
}

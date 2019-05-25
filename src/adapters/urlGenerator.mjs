export default (input) => {
  return `https://genius.com/search?q=${encodeURI(input).toLowerCase()}`
}


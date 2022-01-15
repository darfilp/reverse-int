function toReadable(n) {
  n = Math.abs(n)
  n = n.toString().split('').reverse()
  return +n.join('')
}; 


function toReadable(n) {
  n = Math.abs(n)
  n = n.toString().split('').reverse()
  console.log(+n.join(''))
}; 

toReadable(-198)

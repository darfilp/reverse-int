module.exports = function reverse(n) {
  n = n.toString().split('').reverse()
  return +n.join('')
}; 


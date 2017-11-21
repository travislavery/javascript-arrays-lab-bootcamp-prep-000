const app = "I don't do much."
var kittens = []

function destructivelyAppendKitten(name, array) {
  array.push(name)
  return array
}

function destructivelyPrependKitten(name, array) {
  array.unshift(name)
  return array
}
const app = "I don't do much."
var kittens = []

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name, array) {
  array.unshift(name)
  return array
}
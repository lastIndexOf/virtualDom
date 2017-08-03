
const arrMethods = [
  'push',
  'pop',
  'unshift',
  'shift',
  'splice',
  'reverse'
]

const arrProto = Array.prototype
let mutationProto = {}

arrMethods.forEach(function (method) {
  let arrMethod = arrProto[method]

  mutationProto[method] = function () {
    console.log(method + '被调用了')

    return arrMethod.apply(this, arguments)
  }
})

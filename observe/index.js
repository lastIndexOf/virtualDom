function Observer(data) {
  this.data = data
  this.walk(data)
}

let proto = Observer.prototype

proto.walk = function (data) {
  for (let key in data) {
    if (!data.hasOwnProperty(key)) continue

    if (typeof data[key] == 'object')
      new Observer(data[key])

    this.convert(key, data[key])
  }
}

proto.convert = function (key, val) {
  Object.defineProperty(this.data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log('你访问了' + key)
      return val
    },
    set(nV) {
      console.log('你设置了' + key)
      if (nV === val) return

      val = nV
    }
  })
}

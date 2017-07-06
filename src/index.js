export default class Element {
  constructor(tagName, props, children) {
    this.tagName = tagName
    this.props = props
    this.children = children
  }

  render() {
    return console.log('hello, world')
  }
}

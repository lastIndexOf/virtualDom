class Element {
  constructor(tagName, props, children) {
    this.tagName = tagName
    this.props = props
    this.children = children
  }

  render() {
    const root = document.createElement(this.tagName)

    const props = this.props
    for (let prop in props) {
      root.setAttribute(prop, props[prop])
    }

    const children = this.children || []
    for (let child of children) {
      if (child instanceof Element)
        root.appendChild(child.render())
      else
        root.appendChild(document.createTextNode(child))
    }

    return root
  }
}

export const diff = (oldTree, newTree) => {

}

export const dfsWalk = () => {

}

export const diffChild = () => {

}

export default function El() {
  return new Element(...arguments)
}

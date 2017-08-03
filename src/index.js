class Element {
  constructor(tagName, props, children) {
    this.tagName = tagName  // 该节点的标签类型
    this.props = props  // 该节点的属性, { class: 'class1 class2' }
    this.children = children  // 该节点的子节点
  }

  render() {
    const root = document.createElement(this.tagName)  // 创建dom节点

    const props = this.props
    for (let prop in props) {
      root.setAttribute(prop, props[prop])  // 设置dom节点属性
    }

    const children = this.children || []
    for (let child of children) {
      if (child instanceof Element)
        root.appendChild(child.render())  // 添加子节点
      else
        root.appendChild(document.createTextNode(child))  // 添加文本节点
    }

    return root
  }
}

export default function El() {
  return new Element(...arguments)
}

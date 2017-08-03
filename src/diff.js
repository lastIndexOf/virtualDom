import {
  REPLACE,
  REORDER,
  PROPS,
  TEXT
} from './const.js'
/**
*
*  diff算法的实现
*
*/
export const diff = (oldTree, newTree) => {
  let index = 0
  let patches = {}

  dfsWalk(oldTree, newTree, index, patches)
  return patches
}

/**
*
*  比较 @index 的virtual 节点有什么不同
*
*/
export const dfsWalk = (oldTree, newTree, index, patches) => {

}

export const diffChild = () => {

}

export const diffProps = () => {

}

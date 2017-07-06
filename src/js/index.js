import El from '../index.js'

let el = El('ul', { id: 'test-ul' }, [
   El('li', { class: 'test-li' }, ['li-1']),
   El('li', { class: 'test-li' }, ['li-2']),
   El('li', { class: 'test-li' }, ['li-3'])
])

document.querySelector('#app').appendChild(el.render())

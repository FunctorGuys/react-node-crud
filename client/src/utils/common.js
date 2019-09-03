import { curry } from 'ramda'

export const mapByProp = curry((prop, arr) => arr.reduce((acc, item) => ({
  ...acc,
  [item[prop]]: item
}), {}))

export const mapById = mapByProp('id')

export const uuidv4 = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
  return v.toString(16)
})

export const isFunction = (fnc) => Object.prototype.toString.call(fnc) === '[object Function]'
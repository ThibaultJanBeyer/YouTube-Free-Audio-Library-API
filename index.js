import fs from 'fs'
import songs1 from './songs/1.js'
import songs2 from './songs/2.js'
import songs3 from './songs/3.js'

const url = 'http://docs.google.com/uc?export=open&id='

const all = [...songs1, ...songs2, ...songs3]
const arr = []
const map = {}

all.map(({id}) => { map[id] = `${url}${id}`; arr.push(id); })

const res = {
  arr,
  map: map,
  count: arr.length,
  all,
}

fs.writeFileSync(`./api.json`, JSON.stringify(res))

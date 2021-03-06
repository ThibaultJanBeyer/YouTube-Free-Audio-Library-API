import fs from 'fs'
import songs1 from './songs/1.js'
import songs2 from './songs/2.js'
import songs3 from './songs/3.js'
// https://developers.google.com/drive/api/v3/reference/files/list?apix_params=%7B%22corpora%22%3A%22allDrives%22%2C%22includeItemsFromAllDrives%22%3Atrue%2C%22includeTeamDriveItems%22%3Atrue%2C%22pageSize%22%3A1000%2C%22supportsAllDrives%22%3Atrue%2C%22supportsTeamDrives%22%3Atrue%7D


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

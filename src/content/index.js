import preval from 'preval.macro'

export default preval`
const yaml = require('js-yaml');
const fs = require('fs');
const uuid = require('uuid');
const SRC_DIR = 'src/content';

module.exports = fs.readdirSync(SRC_DIR).filter(fh => fh.endsWith('.yaml')).map(fh => {
  return {
    id: uuid(),
    ...yaml.safeLoad(fs.readFileSync([SRC_DIR, '/', fh].join(''), 'utf8'))
  }
})
`

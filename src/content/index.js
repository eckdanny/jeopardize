import preval from 'preval.macro'

export default preval`
const yaml = require('js-yaml');
const fs = require('fs');
const uuid = require('uuid');
const SRC_DIR = 'src/content';

module.exports = fs.readdirSync(SRC_DIR).filter(fh => fh.endsWith('.yaml')).map(fh => {
  const content = yaml.safeLoad(fs.readFileSync([SRC_DIR, '/', fh].join(''), 'utf8'));
  content.id = uuid();
  content.categories.forEach((category, i) => {
    category.questions.forEach((question, j) => {
      content.categories[i].questions[j].id = uuid();
    })
  })
  return content
})
`

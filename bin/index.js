#!/usr/bin/env node
const { white, cyan, bold } = require('colorette')

// Text + chalk definitions
const work = white(
  `I'm a frontend developer trying to build the right(?) thing right(?)`
)
const twitter = cyan('https://twitter.com/afontcu_')
const github = cyan('https://github.com/afontcu')
const web = cyan('http://fontcuberta.cat')
const blog = cyan('https://medium.com/@afontcu')
const news = cyan('https://buttondown.email/afontcu')
const npx = white('npx afontcu')

const newline = '\n'
const headingLine = `${white(`  👋 Hi! I'm Adrià Fontcuberta`)} ${newline}`
const workLine = `${white(bold('         Work:'))}  ${work} ${newline}`
const twitterLine = `${white(bold('      Twitter:'))}  ${twitter} ${newline}`
const githubLine = `${white(bold('       GitHub:'))}  ${github} ${newline}`
const webLine = `${white(bold('          Web:'))}  ${web} ${newline}`
const blogLine = `${white(bold('         Blog:'))}  ${blog} ${newline}`
const newsLine = `${white(bold('   Newsletter:'))}  ${news} ${newline}`
const npxLine = `${white(bold('         Card:'))}  ${npx} ${newline}`

const output =
  newline +
  headingLine +
  newline +
  workLine +
  twitterLine +
  githubLine +
  webLine +
  blogLine +
  newsLine +
  newline +
  npxLine

console.log(output)

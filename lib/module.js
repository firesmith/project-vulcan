const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = {
    ...this.options['project-vulcan'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'project-vulcan.js',
    options
  })
}

module.exports.meta = require('../package.json')

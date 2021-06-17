const requireContext = require('./index')

const files = requireContext(__dirname, false, /\.js$/)

console.log(files)
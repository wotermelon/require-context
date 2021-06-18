# require.context for Nodejs

> alias webpack require.context()

## Install

```bash
npm install @wotermelon/require-context
```

### Quick Start

```js
const requireContext = require('@wotermelon/require-context')

const fileModules = requireContext('./', false, /\.js$/)

// {
//   './index.js': module
// }
```

#### API

##### requireContext(dir, useSubdirectories, regExp)

- `dir` Which directory to find, can be an absolute path.
- `useSubdirectories` Whether to traverse subdirectories recursively. Defaule is `false`.
- `regExp` To match the file path.

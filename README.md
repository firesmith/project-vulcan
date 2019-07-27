# project-vulcan

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> WIP: a new way to collaborate

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `project-vulcan` dependency to your project

```bash
yarn add project-vulcan # or npm install project-vulcan
```

2. Add `project-vulcan` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'project-vulcan',

    // With options
    ['project-vulcan', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) ackushiw <ackw.kushi@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/project-vulcan/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/project-vulcan

[npm-downloads-src]: https://img.shields.io/npm/dt/project-vulcan.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/project-vulcan

[circle-ci-src]: https://img.shields.io/circleci/project/github/firesmith/project-vulcan.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/firesmith/project-vulcan

[codecov-src]: https://img.shields.io/codecov/c/github/firesmith/project-vulcan.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/firesmith/project-vulcan

[license-src]: https://img.shields.io/npm/l/project-vulcan.svg?style=flat-square
[license-href]: https://npmjs.com/package/project-vulcan

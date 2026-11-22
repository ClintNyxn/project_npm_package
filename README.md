# tiny-text-tools

A beginner-friendly npm package containing common text-processing helpers. It has no external dependencies.

## Installation

```bash
npm install tiny-text-tools
```

## Usage

```js
const textTools = require('tiny-text-tools');

console.log(textTools.countWords('Hello from Node.js')); // 3
console.log(textTools.slugify('My First Project!')); // my-first-project
console.log(textTools.reverseText('hello')); // olleh
console.log(textTools.capitalizeWords('hello world')); // Hello World
console.log(textTools.truncateText('A long sentence', 8)); // A lon...
console.log(textTools.normalizeSpaces('  hello   world  ')); // hello world
```

## Functions

| Function | Purpose |
|---|---|
| `normalizeSpaces(text)` | Trims text and replaces repeated whitespace with one space |
| `countWords(text)` | Counts words in a string |
| `reverseText(text)` | Reverses a string |
| `slugify(text)` | Converts text into a URL-friendly slug |
| `capitalizeWords(text)` | Capitalizes the first letter of each word |
| `truncateText(text, limit)` | Shortens text to a character limit, adding `...` |

## Run tests

```bash
npm test
```

## Publish to npm

1. Create an account at https://www.npmjs.com/.
2. Run `npm login` in this folder.
3. Check the package name is available: `npm view tiny-text-tools`.
4. Run `npm publish`.

If the name is already taken, change the `name` field in `package.json` before publishing.

const test = require('node:test');
const assert = require('node:assert/strict');
const tools = require('../index');

test('normalizes repeated spaces', () => {
  assert.equal(tools.normalizeSpaces('  hello   world  '), 'hello world');
});

test('counts words', () => {
  assert.equal(tools.countWords('one two three'), 3);
  assert.equal(tools.countWords('   '), 0);
});

test('reverses text', () => {
  assert.equal(tools.reverseText('hello'), 'olleh');
});

test('creates URL-friendly slugs', () => {
  assert.equal(tools.slugify('My First Project!'), 'my-first-project');
});

test('capitalizes each word', () => {
  assert.equal(tools.capitalizeWords('hello   world'), 'Hello World');
});

test('truncates long text', () => {
  assert.equal(tools.truncateText('A long sentence', 8), 'A lon...');
});

test('rejects invalid truncate limits', () => {
  assert.throws(() => tools.truncateText('hello', -1));
});

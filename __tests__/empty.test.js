const test = require('tape')
const checker = require('../')

test('empty() tests', t => {
  t.plan(6)

  t.ok(checker.empty(), 'empty() should be ok')
  t.ok(checker.empty(null), 'empty(null) should be ok')
  t.ok(checker.empty(false), 'empty(null) should be ok')
  t.ok(checker.empty(undefined), 'empty(undefined) should be ok')
  t.ok(checker.empty(''), 'empty(\'\') should be ok')
  t.ok(checker.empty('\n\r\t'), 'empty(\'\n\r\t\') should be ok')
})

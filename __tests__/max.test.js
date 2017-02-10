const test = require('tape')
const checker = require('../')

test('max(x, limit) tests', t => {
  t.plan(4)

  t.ok(checker.max(1, 100), 'max(1, 100) should be ok')
  t.ok(checker.max(0.1, 0.3), 'max(0.1, 0.3) should be ok')
  t.ok(checker.max(1, 1), 'max(1, 1) should be ok')
  t.notOk(checker.max(20, 1), 'max(20, 1) should be falsy')
})

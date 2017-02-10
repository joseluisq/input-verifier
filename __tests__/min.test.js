const test = require('tape')
const checker = require('../')

test('min(x, limit) tests', t => {
  t.plan(4)

  t.ok(checker.min(2, 1), 'min(2, 1) should be ok')
  t.ok(checker.min(0.2, 0), 'min(0.1, 0) should be ok')
  t.ok(checker.min(1, 1), 'min(1, 1) should be ok')
  t.notOk(checker.min(1, 2), 'min(1, 2) should be falsy')
})

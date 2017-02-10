const test = require('tape')
const checker = require('../')

test('minor(x1, x2) tests', t => {
  t.plan(4)

  t.ok(checker.minor(1, 2), 'minor(2, 1) should be ok')
  t.ok(checker.minor(-1, 1), 'minor(0, 0.5) should be ok')
  t.ok(checker.minor(-0.1, 0.1), 'minor(0.1, -0.1) should be ok')
  t.notOk(checker.minor(2, 1), 'minor(1, 2) should be falsy')
})

const test = require('tape')
const checker = require('../')

test('major(x1, x2) tests', t => {
  t.plan(4)

  t.ok(checker.major(2, 1), 'major(2, 1) should be ok')
  t.ok(checker.major(1, -1), 'major(0, 0.5) should be ok')
  t.ok(checker.major(0.1, -0.1), 'major(0.1, -0.1) should be ok')
  t.notOk(checker.major(1, 2), 'major(1, 2) should be falsy')
})

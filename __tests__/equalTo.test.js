const test = require('tape')
const checker = require('../')

test('equalTo(x1, x2) tests', t => {
  t.plan(6)

  t.ok(checker.equalTo(1, 1), 'equalTo(1, 1) should be ok')
  t.ok(checker.equalTo(0.1, 0.1), 'equalTo(0.1, 0.1) should be ok')
  t.ok(checker.equalTo('a', 'a'), 'equalTo(a, a) should be ok')
  t.ok(checker.equalTo(false, false), 'equalTo(false, false) should be ok')
  t.notOk(checker.equalTo(1, 1.1), 'equalTo(1, 1.1) should be falsy')
  t.notOk(checker.equalTo('a', 'b'), 'equalTo(a, b) should be falsy')
})

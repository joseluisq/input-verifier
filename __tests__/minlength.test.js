const test = require('tape')
const checker = require('../')

test('minlength(x, limit) tests', t => {
  t.plan(4)

  t.ok(checker.minlength('abc', 3), 'minlength(abc, 3) should be ok')
  t.ok(checker.minlength('12345', 2), 'minlength(\'12345\', 2) should be ok')
  t.notOk(checker.minlength('abcd', 5), 'minlength(abcd, 5) should be falsy')
  t.notOk(checker.minlength(123456, 2), 'minlength(123456, 2) should be falsy')
})

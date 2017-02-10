const test = require('tape')
const checker = require('../')

test('maxlength(x, limit) tests', t => {
  t.plan(4)

  t.ok(checker.maxlength('abc', 4), 'maxlength(abc, 4) should be ok')
  t.ok(checker.maxlength('12345', 5), 'maxlength(\'12345\', 5) should be ok')
  t.notOk(checker.maxlength('abcd', 2), 'maxlength(abcd, 2) should be falsy')
  t.notOk(checker.maxlength(123456, 10), 'maxlength(123456, 10) should be falsy')
})

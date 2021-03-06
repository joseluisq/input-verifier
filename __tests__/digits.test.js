const test = require('tape')
const checker = require('../')

test('digits() tests', t => {
  t.plan(17)

  t.ok(checker.digits(8), 'digits(8) should be ok')
  t.ok(checker.digits(0), 'digits(0) should be ok')
  t.ok(checker.digits('01234789'), 'digits(\'01234789\') should be ok')
  t.ok(checker.digits(+1), 'digits(+1) should be ok')
  t.ok(checker.digits('0'), 'digits(\'0\') should be ok')
  t.notOk(checker.digits(-1), 'digits(-1) should be falsy')
  t.notOk(checker.digits(0.637), 'digits(0.637) should be falsy')
  t.notOk(checker.digits('1009.0055'), 'digits(\'1009.0055\') should be falsy')
  t.notOk(checker.digits(null), 'digits(null) should be falsy')
  t.notOk(checker.digits(false), 'digits(false) should be falsy')
  t.notOk(checker.digits(true), 'digits(true) should be falsy')
  t.notOk(checker.digits(), 'digits() should be falsy')
  t.notOk(checker.digits(''), 'digits(\'\') should be falsy')
  t.notOk(checker.digits('abc'), 'digits(\'abc\') should be falsy')
  t.notOk(checker.digits([]), 'digits([]) should be falsy')
  t.notOk(checker.digits({}), 'digits({}) should be falsy')
  t.notOk(checker.digits('\n\r\t'), 'digits(\'\n\r\t\') should be falsy')
})

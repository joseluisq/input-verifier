const test = require('tape')
const checker = require('../')

test('email() tests', t => {
  t.plan(9)

  t.ok(checker.email('info@company.com'), 'email(info@company.com) should be ok')
  t.notOk(checker.email('guest@localhost'), 'email(guest@localhost) should be falsy')
  t.notOk(checker.email('më@café.com'), 'email(\'më@café.com\') should be falsy')
  t.notOk(checker.email('me@cafe.com '), 'email(\'me@cafe.com \') should be falsy')
  t.notOk(checker.email(null), 'email(null) should be falsy')
  t.notOk(checker.email(false), 'email(false) should be falsy')
  t.notOk(checker.email(true), 'email(true) should be falsy')
  t.notOk(checker.email(undefined), 'email(undefined) should be falsy')
  t.notOk(checker.email(''), 'email(\'\') should be falsy')
})

const test = require('tape')
const checker = require('../')

test('alphanumeric() tests', t => {
  t.plan(8)

  t.ok(checker.alphanumeric('0123456789abcdfghijklmnopqrstuvqxyz'), 'alphanumeric(0123456789abcdfghijklmnopqrstuvqxyz) should be ok')
  t.ok(checker.alphanumeric('0123456789abcdfghijklmnopqrstuvqxyz'), 'alphanumeric(ABCDFGHIJKLMNOPQRSTUVQXYZ0123456789) should be ok')
  t.ok(checker.alphanumeric('Hello word'), 'alphanumeric(\'Hello word\') should be ok')
  t.notOk(checker.alphanumeric(false), 'alphanumeric(false) should be falsy')
  t.notOk(checker.alphanumeric(null), 'alphanumeric(null) should be falsy')
  t.notOk(checker.alphanumeric(undefined), 'alphanumeric(undefined) should be falsy')
  t.notOk(checker.alphanumeric(''), 'alphanumeric(\'\') should be falsy')
  t.notOk(checker.alphanumeric([]), 'alphanumeric([]) should be falsy')
})

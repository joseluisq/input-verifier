const test = require('tape')
const verifier = require('../')

test('alphabetic() tests', t => {
  t.plan(9)

  t.ok(verifier.alphabetic('ABCDFGHIJKLMNOPQRSTUVQXYZ'), 'alphabetic(ABCDFGHIJKLMNOPQRSTUVQXYZ) should be ok')
  t.ok(verifier.alphabetic('abcdfghijklmnopqrstuvqxyz'), 'alphabetic(abcdfghijklmnopqrstuvqxyz) should be ok')
  t.notOk(verifier.alphabetic('0123456789abcdfghijklmnopqrstuvqxyz'), 'alphabetic(0123456789abcdfghijklmnopqrstuvqxyz) should be ok')
  t.notOk(verifier.alphabetic('Hello word'), 'alphabetic(\'Hello word\') should be falsy')
  t.notOk(verifier.alphabetic(1), 'alphabetic(1) should be falsy')
  t.notOk(verifier.alphabetic(false), 'alphabetic(false) should be falsy')
  t.notOk(verifier.alphabetic(null), 'alphabetic(null) should be falsy')
  t.notOk(verifier.alphabetic(undefined), 'alphabetic(undefined) should be falsy')
  t.notOk(verifier.alphabetic(''), 'alphabetic(\'\') should be falsy')
})

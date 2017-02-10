const test = require('tape')
const checker = require('../')

test('url() tests', t => {
  t.plan(12)

  t.ok(checker.url('http://www.company.com'), 'url(\'https://company.co.uk\') should be ok')
  t.ok(checker.url('www.company.com.de'), 'url(\'www.company.com.de\') should be ok')
  t.ok(checker.url('http://web.es/app/us.html?val1=0&val2=a#about'), 'url(\'val..\') should be ok')
  t.notOk(checker.url('/var/www/index.html'), 'url(\'/var/www/...\') should be falsy')
  t.notOk(checker.url('ftp://var/www/index.html'), 'url(\'ftp://...\') should be falsy')
  t.notOk(checker.url('c:\\var\\www\\index.html'), 'url(\'c://...\') should be falsy')
  t.notOk(checker.url(null), 'url(null) should be falsy')
  t.notOk(checker.url(false), 'url(false) should be falsy')
  t.notOk(checker.url(undefined), 'url(undefined) should be falsy')
  t.notOk(checker.url(''), 'url(\'\') should be falsy')
  t.notOk(checker.url('https://localhost '), 'url(\'https://locahost \') should be falsy')
  t.notOk(checker.url('http://www.co/\n'), 'url(\'http://www.co/\n\') should be falsy')
})

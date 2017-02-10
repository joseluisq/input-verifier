const fn = {
  empty: x => !x || /^\s+$/.test(x),

  email: x => /\w{1,}[@][\w-]{1,}([.]([\w-]{2,})){1,3}$/.test(x),

  url: x =>
    /https?:\/\/(?:www\.|(?!www))[^\s.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,}/.test(x),

  number: x => /^-?(\d+\.?\d*)$|(\d*\.?\d+)$/.test(x),

  digits: x => /^\d+$/.test(x),

  decimal: x => /^-?\d+\.\d{1,}$/.test(x),

  negative: x => /^-\d+(\.\d{1,})?$/.test(x),

  alphanumeric: x => x && /^[\w\s?]+$/.test(x),

  alphabetic: x => x && /^[a-z]+$/i.test(x),

  major: (x1, x2) => fn.number(x1) && Number(x1) > x2,

  minor: (x1, x2) => fn.number(x1) && Number(x1) < x2,

  max: (x, limit) => fn.number(x) && Number(x) <= limit,

  min: (x, limit) => fn.number(x) && Number(x) >= limit,

  equalTo: (x1, x2) => !!(x1 === x2),

  maxlength: (x, len) => x.length && x.length <= len,

  minlength: (x, len) => x.length && x.length >= len
}

module.exports = fn

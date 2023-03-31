"use strict";

const CHARS = require('./chars');

/**
 * Generate a random id
 * 
 * By default generates an RFC4122 version 4 UUID.
 * However it can also generate compact form unique ids.
 * 
 * @param {number} [len] Length for compact id
 * 
 * If omitted, a UUID v4 will be generated.
 * 
 * @param {number} [radix=62] Base radix for compact id
 * 
 * The `radix` value must be >= 2 and <= 62.
 * 
 * @returns 
 */
module.exports = function (len, radix) 
{
  let chars = CHARS, uuid = [], i;
  radix = radix || chars.length;

  if (len) 
  { // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
  } else 
  { // rfc4122, version 4 form
    let r;
     // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';
    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) 
    {
      if (!uuid[i]) 
      {
        r = 0 | Math.random()*16;
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join('');
}

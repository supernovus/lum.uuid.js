"use strict";

const CHARS = require('./chars');

/**
 * A more performant, but slightly bulkier, RFC4122v4 solution.
 * 
 * @returns {string} A UUID v4 string
 */
module.exports = function() 
{
  let chars = CHARS, uuid = new Array(36), rnd=0, r;
  for (let i = 0; i < 36; i++) 
  {
    if (i==8 || i==13 ||  i==18 || i==23) 
    {
      uuid[i] = '-';
    } 
    else if (i==14) 
    {
      uuid[i] = '4';
    } 
    else 
    {
      if (rnd <= 0x02) rnd = 0x2000000 + (Math.random()*0x1000000)|0;
      r = rnd & 0xf;
      rnd = rnd >> 4;
      uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
    }
  }
  return uuid.join('');
}

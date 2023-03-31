# lum.uuid.js

A fork of [Math.uuid.js](https://www.broofa.com/Tools/Math.uuid.js) 
ported to the CommonJS module format for better use in npm libraries.

## Exports

I have split up the various UUID generator functions from the original library
into individual modules, so you can load only the specific one you want to use.

| Module                           | Description                              |
| -------------------------------- | ---------------------------------------- |
| `@lumjs/uuid`                    | The `Math.uuid()` function.              |
| `@lumjs/uuid/fast`               | The `Math.uuidFast()` function.          |
| `@lumjs/uuid/compact`            | The `Math.uuidCompact()` function.       |

## Official URLs

This library can be found in two places:

 * [Github](https://github.com/supernovus/lum.uuid.js)
 * [NPM](https://www.npmjs.com/package/@lumjs/uuid)

## Authors

* Robert Kieffer <robert@broofa.com> - Original author of functions
* Timothy Totten <2010@totten.ca> - Ported to CommonJS format

## Licenses

Dual licensed under the [MIT](https://spdx.org/licenses/MIT.html)
and [GPL](https://spdx.org/licenses/GPL-2.0-or-later.html) licenses.

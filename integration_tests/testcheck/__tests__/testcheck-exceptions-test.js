/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

const check = require('jest-check').check;

describe('testcheck-exceptions', () => {
  check.it('reports exceptions', [], () => {
    throw new Error('This error should be reported.');
  });
});

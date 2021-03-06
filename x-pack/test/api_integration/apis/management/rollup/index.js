/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

export default function ({ loadTestFile }) {
  // FLAKY: https://github.com/elastic/kibana/issues/33217
  describe.skip('rollup', () => {
    loadTestFile(require.resolve('./rollup'));
    loadTestFile(require.resolve('./index_patterns_extensions'));
    loadTestFile(require.resolve('./rollup_search'));
  });
}

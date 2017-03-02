'use strict'

// Add support for Promise objects via polyfills
import 'babel-polyfill'

// Add support for all files in the test directory
let testsContext = require.context('../src', true, /.*\.spec\.js/)
testsContext.keys().forEach(testsContext)

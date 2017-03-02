
# Try for full unit tests coverage

The is an extra simple example to demonstrate my need to have full real coverage measurement.

## How to ?

To run the tests :  ```npm test```

## What's the problem ?

Actually, the output is :

```
SUMMARY:
✔ 1 test completed
----------|----------|----------|----------|----------|----------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------|----------|----------|----------|----------|----------------|
----------|----------|----------|----------|----------|----------------|
All files |      100 |      100 |      100 |      100 |                |
----------|----------|----------|----------|----------|----------------|
````

The coverage is 100% but it's wrong, ```NotTestedService``` is not tested !!

The file is not taken into account, because the entry point is ```loadtests.js```
which load all ```*.spec.js``` file, and all imported needed file, except 
```NotTestedService``` which is not needed...

## Adding 'istanbul'

In ```karma.conf.js```, adding ```istanbul-instrumenter-loader``` (line 43 in place of line 42) 
give the following output :

```
SUMMARY:
✔ 1 test completed
------------------------|----------|----------|----------|----------|----------------|
File                    |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
------------------------|----------|----------|----------|----------|----------------|
 src/                   |    89.47 |    64.29 |    84.62 |    91.67 |                |
  TestedService.js      |    89.29 |       60 |    88.89 |    92.86 |             32 |
  TestedService.spec.js |       90 |       75 |       75 |       90 |             14 |
 test/                  |      100 |      100 |      100 |      100 |                |
  loadtests.js          |      100 |      100 |      100 |      100 |                |
------------------------|----------|----------|----------|----------|----------------|
All files               |    90.24 |    64.29 |    84.62 |    92.59 |                |
------------------------|----------|----------|----------|----------|----------------|
```

The ```NotTestedService``` is still not taken into account

And, in addition, I got this error breaking html coverage interested generation :

```
02 03 2017 16:36:53.366:ERROR [coverage]: TypeError: Cannot read property 'text' of undefined
    at /Users/...test-full-coverage-with-webpack/node_modules/istanbul/lib/report/html.js:239:51
    at Array.forEach (native)
    at annotateFunctions (/Users/...test-full-coverage-with-webpack/node_modules/istanbul/lib/report/html.js:224:26)
```

## What's the question ? 

How to get full real coverage measuremnt on all my ```src``` source code repository ? 

Thanks for any help ! :-)

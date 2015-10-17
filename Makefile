test-node:
	@mocha --compilers js:babel/register test/test.js

test-webpack:
	@webpack 'mocha!./test/test.js' test/testBundle.js
	@open test/index.html

test-webpack-dev:
	@open http://localhost:8080/test
	@webpack-dev-server 'mocha!./test/test.js' --hot --inline --output-filename test.js

test-karma:
	@./node_modules/.bin/karma start
	@open coverage/html/index.html

test-coveralls:
	@echo TRAVIS_JOB_ID $(TRAVIS_JOB_ID)
	@node_modules/.bin/karma start --single-run && \
		 cat ./coverage/lcov/lcov.info | ./node_modules/coveralls/bin/coveralls.js

.PHONY: test

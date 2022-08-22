# webdemo
a quick test of the web demo

To run the tests do the following:

1. clone the repo and copy this directory into the root of the test image tagging project.
2. Add an image to the integration_tests/tests folder
3. run ```npm i`` to install dependencies
4. run the command ```npm run test```

The 2 integration tests should run, firstly they clean the database, then they start the server and then runn the tests.

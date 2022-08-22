# webdemo
a quick test of the web demo

# How to set up

1. clone the repo and copy this directory into the root of the image tagging project.
2. Add an image to the integration_tests/tests folder
3. run ```npm i`` to install dependencies
4. run the command ```npm run test```

The integration tests should run, firstly they clean the database, then they start the server and then run the tests.

The tests should run if there are changes to the web app or the database schema.


# What I would have done differently with my tests

1. The clean up of the database and the closing of the connection.  I would have prefered to have done this in the test itself. I did try to do this by spawning a child process to run a terminal command in the before step of the tests but for whatever reason this wasnt working reliably. To save time I ended up using a work around - to get the MVP running on an npm script to clean up the database and get things working.  It probably would have been better to include a Dockerfile for each of the services to clean up the db etc.

2. It would have been nice if the delete image endpoint would have been implemented. This would have made test tidy up much easier that cleaning out the db with a script.

3. the current set up isnt ideal as it has the potential to build up state between tests. When i can tear down the data between tests this wont be an issue any more.



# Feedback on the framework

The frameworks biggest issue is the documentation. I found it a bit unclear on how to do certain things.  Let me give you an example.  It wasnt clear that there was already a virtual env set up in the filesystem and you had to go to the directory and source that.  So specific instructions such as that would be useful.

Im not sure if it is because I'm using an M1 Mac but trying to install the dependencies via poetry generrated a few errors.  I had to manually add some dependencies via pip install to get the unit tests to work.


# Feedback on the Requirments
The requirements would maybe benefit from a bit of context on how it is used like a user story. 

1. There is no specific requirements on the types of images that can be added such as the file format extensions etc.  There is no meantion about any other sorts of details are they to have an id or an associated user with the image and so forth.
2. It isnt clear what it means to modify an image.  Does this mean removing an image and replacing it with a new image or does it mean the original image cant be deleted but you can save overlays onto it?
3. Are just the images retrieved only how about their associated data such as tags and other information?


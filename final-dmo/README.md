
#In this project we use node.js with express to create a food truck web app.

##The codes that we wrote are server.js and index.ejs in a sub_dictionary views.
##package.js is the js file auto create when init node.js for this project 
##Put server.js in the dictionary you wanna run them and create a folder named views and put index inside of it.
##To run our code, you have to first install node.js:
##https://nodejs.org/en/
##Choose the 6.9.2 version. Because the npm may not work with the 7.2.1 version.
##You can check the node.js version and npm version though:
##$ node -v
##$ npm -v
##You should have both of them after you install node.js.
##After that init the npm in the Dictionay that you want to run the codes.
##To init use :
##$ npm init
##Then, install express:
##$ npm install express --save
##install body-parser for read data:
##$ npm install body-parser --save
##install mongdb package for connection with mongodb:
##npm install mongodb --save
##install ejs as our template engine :
##$ npm install ejs --save
##install body-parser for form to read the input when use the search functionality
##$ npm install body-parser --save

##now you should done with setting up.
##To run the code:
##node server.js
##and you can see the web app through local host 3000

##You have to put your own GoogleMapApikey in the index.ejs

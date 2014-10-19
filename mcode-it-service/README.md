mcode-it-service
================

check the app here-
http://mcode-it-service.herokuapp.com/now


to run on heroku:
- cd mcode-it, heroku login
- git remote set-url heroku git@heroku.com:mcode-it-service.git
- git subtree push --prefix mcode-it-service heroku master			// if there is something to push
- heroku open

password to login into RIT CS machine:
- SJCL library is used
- 'e_pwd' contains encrypted string of original password
- 'e_pwd' is then decrypted to make FTP connection and run the program


setup sharejs:
- add "share" dependency in package.json to version 0.6.x
- npm install
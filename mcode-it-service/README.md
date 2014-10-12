mcode-it-service
================

check the app here-
http://mcode-it-service.herokuapp.com/now


to run on heroku:
1. cd mcode-it, heroku login
2. git remote set-url heroku git@heroku.com:mcode-it-service.git
3. git subtree push --prefix mcode-it-service heroku master			// if there is something to push
4. heroku open

password to login into RIT CS machine:
- SJCL library is used
- 'e_pwd' contains encrypted string of original password
- 'e_pwd' is then decrypted to make FTP connection and run the program
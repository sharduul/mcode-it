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


for getting error (STDERR) from server:

	stream.on('data', function(data, extended) {
				  
		program_result = (extended === 'stderr' ? 'STDERR: ' : '') + data;
		
	}).stderr.on('data', function(data) {
	  console.log('STDERR: ' + data);
	});



Remote parallel Java programs execution:
- shell script called 'run.sh' is executed (find it in 'imp files' folder)
- in that classpath is set to 'pj.jar' - which is the parallel java library (find it in 'imp files' folder)

- note: you can use the same shell script to run normal programs as well

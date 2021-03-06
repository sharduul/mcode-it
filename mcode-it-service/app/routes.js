
module.exports = function(app) {
	
	var Connection = require('ssh2');
	var fs = require('fs');
	var crypt = require('sjcl');


	var e_pwd = '{"iv":"F6hqYswTohihTCm1doq6qw==","v":1,"iter":1000,"ks":128,"ts":64,"mode":"ccm"'
					+ ',"adata":"","cipher":"aes","salt":"+u1QtH9KnzE=","ct":"s+G7gWgmskblFpOeqcCCHyZsGfqohg=="}';
	var var_password = crypt.decrypt("password", e_pwd);

	var var_uname = 'scb8803';
	//var program_file_name = "program_to_run.c";
	var class_name = '';
	var program_result = '';


	
	app.get('/now', function(request, response) {
	  var d = new Date();
	  response.send(200, 
	  	{date: "test 1",
	  		port: app.get('port')}); // (status code, response body)
	  
	});


	// get the output of program
	app.get('/api/run', function(req, res) {

		//console.log(req.query.codeText);
		program_result = ''; // reset program result

		var code_to_run = unescape(req.query.codeText);
		class_name = req.query.className;

		console.log(class_name);

		//var code_to_run = unescape(str_code);
		
		write_to_file('user-data/' + class_name + '.java', code_to_run);

		run_ssh2(function(){
			console.log("test call back");
			console.log(program_result);

			res.send(200, {output_text:program_result});
			
		});
		
	});

	

	// write the new code on file
	function write_to_file(path, content)
	{
		fs.writeFile(path, content, function(err) {
			if(err) {
				console.log(err);
			} else {
				console.log("The file was saved!");
			}
		}); 
	}



	// send the updated file to servers. run the program and get the results.
	function run_ssh2(callback)
	{

		var rit_server_file_path = 'MSFinal-UserData/';
		var rit_server_file_name = class_name + '.java';

		program_result = ''; // reset result from server
		var c = new Connection();
		c.on('ready', function() {
		  console.log('Connection :: ready');
		  
		  c.sftp(
					function (err, sftp) {
						if ( err ) {
							console.log( "Error, problem starting SFTP: %s", err );
							//process.exit( 2 );
						}
		 
						console.log( "- SFTP started" );
						
						
						sftp.unlink( rit_server_file_path + rit_server_file_name, function(err){ 
								
							if ( err ) {
								console.log( "Error, problem starting SFTP: %s", err );
								//process.exit( 2 );
							}
							else
							{
								console.log( "file unlinked" );
							}
						
						});
		 

						// upload file
						var readStream = fs.createReadStream('user-data/' + class_name + '.java');
						var writeStream = sftp.createWriteStream(rit_server_file_path + rit_server_file_name);
						
						
						writeStream.on('end', function () {
						
							console.log( "sftp connection closed" );
							
						  });
						
		 
						// what to do when transfer finishes
						writeStream.on(
							'close',
							function () {
							
								console.log( "- file transferred" );
								
								sftp.chmod( rit_server_file_path + rit_server_file_name, '0777', function(err){ 
								
									if ( err ) {
										console.log( "Error, problem starting SFTP: %s", err );
										//process.exit( 2 );
									}
									else
									{
										console.log( "Mode changed" );

									}


									console.log( "Executing program" );

										//execute the program
										//c.exec('gcc -o testc ' + program_file_name + ' && ./testc', function(err, stream) {
										//c.exec('cd ' + rit_server_file_path + ' && javac ' + rit_server_file_name + ' && java ' + class_name, function(err, stream) {
										c.exec('cd ' + rit_server_file_path + ' && bash run.sh ' + class_name, function(err, stream) {
										//c.exec('ls -lah', function(err, stream) {
											
											if (err) 
											{
												console.log("ERRRR" + err);
												throw err;
											}


											stream.on('data', function(data, extended) {

												//console.log((extended === 'stderr' ? 'STDERR: ' : 'STDOUT: ') + data);														  
												program_result += data;
												
											}).stderr.on('data', function(data) {

												 	program_result += data;

											});

											stream.on('end', function() {
											  console.log('Stream :: EOF');
											});
											stream.on('close', function() {
												console.log('Stream :: close');
												
												// close the ftp connection
												sftp.end();
												// fs.end();
												//process.exit( 0 );
											  
											});
											stream.on('exit', function(code, signal) {
											  console.log('Stream :: exit :: code: ' + code + ', signal: ' + signal);
											  c.end();
											  
											  
												
											  
											});
										  });

								
								});
								
								
							}
						);
		 
						// initiate transfer of file
						readStream.pipe( writeStream );
					}
				);
				
				
		  
		  
		  
		});
		c.on('keyboard-interactive', function(name, instructions, instructionsLang, prompts, finish) {
		  console.log('Connection :: keyboard-interactive');
		  finish([var_password]);
		});
		c.on('error', function(err) {
		  console.log('Connection :: error :: ' + err);
		});
		c.on('end', function() {
		  console.log('Connection :: end');
		});
		c.on('close', function(had_error) {
		  console.log('Connection :: close');
		  callback();
		});
		c.connect({
		  host: 'glados.cs.rit.edu',
		  port: 22,
		  username: var_uname,
		  password: var_password,
		  tryKeyboard: true
		});


	}




};



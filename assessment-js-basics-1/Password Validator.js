const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(
  "Welcome to the password validator! Please input a password: ", 
  function(input) {
	console.log(input)
  console.log(input.length)
  
  if (input.length >10){
    console.log('Your password looks great!')
  } else {
    console.log('Password is too short, try again')
  }
	
	// This line closes the connection to the command line interface.
	reader.close()

});

function main( input ) {

  var opt = 1;
  
  while ( input > 0) {

    opt = opt * input;
    input --;
  }

  //Enter your code here
  process.stdout.write(opt);
}

process.stdin.resume();

process.stdin.setEncoding("utf-8");

var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
   main(stdin_input);
});


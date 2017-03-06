function main( input ) {

    var opt = "";
    
    for( var lt of input ){
        
        if( /[a-z]/.test(lt)  ){
        
            opt += lt.toUpperCase();
        }
        else {
            
            opt += lt.toLowerCase();
        }
        
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


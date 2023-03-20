const timer = process.argv.slice(2); //get rid of the two initial process.argv lines.
// process.stdout.write('\x07');
// timer is used to refer to an array of command line arguments

for (let i = 0; i < timer.length; i++) {
  if (timer[i] > 0 && !isNaN(timer[i])) { //checks if the argument is a number greater than 0 and is not not a number.
    setTimeout(() => {
      process.stdout.write('.'); //the sound was unconsistent on my machine so I used a dot instead.
    }, timer[i] * 1000);
  }
}

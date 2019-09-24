const sentence = "hello there from lighthouse labs";

delay = 0 // set delay value

for (const char of (sentence + '\n')) {
  setTimeout(() => { 
    process.stdout.write(char); // print the char here
  }, delay); 
  delay += 50; // <= each char with an increment of delay 50ms
}

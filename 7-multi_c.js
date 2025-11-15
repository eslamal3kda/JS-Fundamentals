const x = Number(process.argv[2]);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  let output = "";
  while (i < x) {
    output += "C is fun";
    if (i < x - 1) output += "\n";
    i++;
  }
  console.log(output);
}

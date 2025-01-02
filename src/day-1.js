console.log("Let's build a pyramid using JavaScript basics:");
console.log("    #    ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ####### ");
console.log("#########");

for(let line=0; line<= 4; line++) {
  let row = '';
  for(let column=4-line; column > 0; column--) {
    row += ' ';
  }
  for(let hash=0; hash<(line+line + 1); hash++){
    row += '#';
  }
  console.log(row);
}
/* 
    * split
    * startsWith
    * endsWith
    * chartAt
    * toUpperCase
    * toLowerCase
    * concat
    * trim
    * slice
*/
const x = "Mohammad Moshfiqur Rahman Emam Bokari";
const a="image.jpg";
const b="          Emam Bokhari";

console.log(x.slice(0,8)); 
console.log(x.startsWith("M"));
console.log(a.endsWith(".jpg"));
console.log(a.toUpperCase());
console.log(x.toLowerCase());
console.log(x.concat(" ").concat(a));
console.log(b.trim());
console.log(x.split(" "));
console.log(a.charAt(6));
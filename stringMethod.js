// concat method
// Ex:01
// concat method ar madhome amra akti string ar sathe arekti string k jog korte pari
const a = "Hello";
const b = "World!";
console.log(a.concat(b));

// substring method
// Ex:01
// string theke nirdisto onghso ber kore anar jonno amara substing method use korte pari
const c="This is Apple";
console.log(c.substring(0,5));

// chartAt method
// Ex:01
// chartAt method ar mahdome amra akti string kon ar nirdisto index a ki ache ta dekhte pari
const d="Moshfiqur Rahman";
console.log(d.charAt(0));

// startsWith method,endWith method
// Ex:01,02
// startsWith,endsWith method ar mahodme amra akti string ar soro abong sesh ki dara hoise tar upor vitti kore boolearn value pai, true or false
const e="Mango.jpg";
console.log(e.endsWith(".jpg"));

const f="Emam Bokhari";
console.log(f.startsWith("E"));

// toUpperCase,toLowerCase method
// Ex:01,02
// string k uppercase othuba lowercase korar jonno ai method gula use kora hoi
const g="this is moshfiqur rahman";
console.log(g.toUpperCase());

const h="This is Moshfiqur Rahman";
console.log(h.toLowerCase());

// trim,split method
// Ex:01,02
// kono string samne/pichoner khali space gula remove korte trim method use kora hoi
const i="          Cat food";
console.log(i.trim());
// kono akta sentence k nirdiso kiso akta upor vitti kore venge akta array te dhokanor kaje split method use kora hoi
const j="This is Mosh fiqur Rahman";
console.log(j.split(" "));
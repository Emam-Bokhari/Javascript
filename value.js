// javascript a 8 ti data type ase
/* 
1. String - Primitive data type,
   Number -Primitive data type,
   Bigint - Primitive data type,
   Boolean - Primitive data type,
   Undefined - Primitive data type,
   Null - Primitive data type,
   Symbol - Primitive data type,
   Object - Non Primitive data type
*/

/* 
 # primitive data type ka k bole? 
 primitive data type hoche akta moulik/basic jinish.
# Non primitive data type ka k bole?
Non primitive data type hoise akta complex data type, ja toiri hoise primitive data type gular somonnoye.
Ex: "Count" ---> aita hoche akta string data type
    10 ---> aita hoche akta number data type
    {"Count":10} --->string r number ar sommoniye akta object toiri kora hoise
    object a 2 ta jinish ase akta hoche key="Count", r akta hoche value=10

*/

// primitive a data gula kivabe handle kora hoi
let count = 20;
let item = 10;
count = item; // 10  
item = 30; 
console.log(item, count);

/* 
primitive data type ar khetre hoi pass by value, r non-primitive ar khetre hoi pass by reference
*/

let user = { name: "Alex" }; // f30110
let employ = { names: "Sam" }; // ab901b
user=employ; // user = ab901b

user.names="Bokhari";

console.log(user,employ)



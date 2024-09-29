function add(x,y,z){
    const result=x+y+z;
    return result;
}
const result=add(5,5,5);
console.log(result);
// ex:02
function person(name,email,address){
    return{
        personName:name,
        emailAddress:email,
        thikana:address
    };
}
const obj=person("Emam Bokhari","abc@gmail.com","Kasba");
console.log(obj)
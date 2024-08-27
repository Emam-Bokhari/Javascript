const x={
    a:10,
    b:20
};

for(let i in x){
    console.log(i);
}

console.log(Object.keys(x));
console.log(Object.values(x));
console.log(Object.entries(x));
console.log(Object.assign({},x));


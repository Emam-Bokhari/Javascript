const marks = {
  x: 10,
  y: 11,
  z: 12,
};

// key gula puar jonno
console.log(Object.keys(marks));

// value guola puar jonno
console.log(Object.values(marks));

// 2 dimentional array akare puar jonno
console.log(Object.entries(marks));

// object k clone korar jonno
const obj=Object.assign({},marks);
console.log(obj);
obj.a="111";
console.log(obj);

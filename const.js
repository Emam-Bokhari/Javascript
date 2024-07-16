// const r let ar maje mol parthookko hocche let reassign kora jai, r const reassign kora jai na
// let o block scope, const o block scope

const x = 20;

{
  const x = 30;
  console.log(x);
}

console.log(x);

x=50;

console.log(x)

// const x=50; aita k bole redeclare | orthat x namok variable akbar ase, ta o abar declare kora

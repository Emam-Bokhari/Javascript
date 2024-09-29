// logical && shorthand
// logical && operator ar khetre jadi truthy value hoi tahule e kebol dan pasher ta return korbe.
const isOkay = true;
isOkay && console.log("Well Done!");

// logical || shorthand
// logical || operator ar khtre jadi bam pasher ta falsy value hoi tahule e kebol dan pasher ta return korbe, aikhne name a emptry string daoua ase jaita akta falsy value tai dan pasher ta orthat Emam Bokhari console a dekhabe.
const name = "";
const fullName = name || "Emam Bokhari";
console.log(fullName);
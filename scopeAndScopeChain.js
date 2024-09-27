function jerry() {
  console.log(name);
}

function tom() {
  var name = "tom";
  jerry();
}

var name = "cartoon";

tom();

/* 
  GEC:
      creation phase:
      jerry:0acb90;
      tom:092bc0;
      name:undefined;
      execution phase:
      name:"cartoon";
      tom:execute();
          FEC:
              cretion phase:
              name:undefined;
              execution phase:
              name:"tom";
              jerry:execute();
                  FEC:
                  creation phase:
  
                  execution phase:
                  console.log("cartoon")  // 1st print
  
                      
  
  
  */

var count = 10;

function outer() {
  var count = 20;

  function inner() {
    var count = 30;
    console.log(count);
  }
  inner();
  console.log(count);
}
outer();
console.log(count);

/* 
  GEC:
      creation phase:
      count:undefined;
      outer:090bc2;
      execution phase:
      count:10;
      outer:execute();
          FEC:
          creation phase:
          count:undefined;
          inner:0909a2;
          execution phase:
          count:20;
          inner:execute();
              FEC:
              creation phase:
              count:undefined;
              execution phaes:
              console.log(30);  // 1st print
              console.log(20);  // 2nd print
              console.log(10);  // 3rd print
  
  */

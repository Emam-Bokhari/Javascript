chase();

function chase() {
  console.log("Tom chases Jerry!");
  caught();
}

function caught() {
  console.log("Tom caught jerry :(");
}

/* 
GEC:
    creation phase:
    chase:0ab9c0;
    caught:m90cb;
    execution phase:
    chase:execute();
        FEC:
        creation phase:

        execution phase:
        console.log("Tom chases Jerry!");
        caught:execute();
            FEC:
            creation phase:

            execution phase:
            console.log("Tom caught jerry :(");

*/

test();

var test = function () {
  console.log("I am being tested");
};

/* 
GEC:
    creation phase:
    test:undefined;
    execution phase:

    aita error dibe, karon test function na
        

*/

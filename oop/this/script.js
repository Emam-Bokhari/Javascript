// this value ta ki hobe ta depend korbe kothai execute hoche tar upor, jaikhne execute hobe ai this shai jaigar object k e reffer korbe, r jadi kono function a this keyword likha hoi tahule aita window object k reffer korbe, this hoche execution ar thik ager mohorte value ta pai, r object baitio onno ja kono jaigai this use korle she sobosmai window object k reffer kore dibe

const rect = {
  width: 20,
  height: 10,

  calculateArea: function () {
    console.log(this.width * this.height);
    console.log(this)
  },
};

rect.calculateArea()

function myFunc(){
    console.log(this)
}

myFunc()

let another={
    width:4,
    height:4,
    print:rect.calculateArea
}

another.print()
const bokhariDetails = {
  name: "Emam Bokhari",
  age: 25,
  address: {
    district: "Brahmanbaria",
    contact: {
      number: "+880 131-57-73 424",
    },
  },
};

console.log(bokhariDetails);
console.log(bokhariDetails.address.contact);

// shalow copy
const newObject = {
  ...bokhariDetails, // ai code ti bokhariDetails ar shallow copy toiri kore
  age: 24,
  address: {
    // address ar shallow copy toiri kore
    ...bokhariDetails.address,
    contact: {
      // contact ar shallow copy toiri kore
      ...bokhariDetails.address.contact,
      number: "01315773424",
      phone: "Not Allow!",
    },
  },
};

console.log(newObject, bokhariDetails);

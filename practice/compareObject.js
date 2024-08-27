const x = {
  math: 33,
  higherMath: 77,
  biology: 66,
};

const y = {
  math: 90,
  higherMath: 85,
  biology: 91,
};

// compare object values
if (Object.values(x) < Object.values(y)) {
  console.log(true);
} else {
  console.log(false);
}

// compare object keys
if (Object.keys(x) > Object.keys(y)) {
  console.log(true);
} else {
  console.log(false);
}



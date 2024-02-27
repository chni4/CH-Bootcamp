let age = 19;
let username = '';
const score = 0;

for (let i = 1; i <= age; i++) {
  console.log(i);
}

if (age >= 18) {
  console.log("Das Alter ist höher als 18");
} else {
  console.log("Das Alter ist unter 18");
}

if (score) {
  console.log("Score is evaluated as truthy.");
} else {
  console.log("Score is not available");
}


if (username) {
  console.log("Username is available.");
} else {
  console.log("Username is evaluated as falsy.");
}


let isAdmin = false;


if (isAdmin) {
  console.log("isAdmin is evaluated as truthy.");
} else {
  console.log("isAdmin is evaluated as truthy.");
}


if (!isAdmin) {
  console.log("isAdmin is false.");
}
